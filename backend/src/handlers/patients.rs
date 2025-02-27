use super::APIResponse;
use super::HandlerResult;
use crate::auth::middleware::AuthMiddleware;
use crate::controllers::patient_controller::PatientController;
use crate::models::Pagination;
use crate::models::{
    patient::{NewPatient, Patient, PatientType},
    user::UserRole,
};
use serde_json::json; 
use crate::{db::connection::DBService, error_archive::ErrorArchive};
use actix_multipart::Multipart;
use actix_web::{
    delete, get, post,
    web::{self, ServiceConfig},
    HttpResponse,
};
use std::collections::HashMap;
use std::fs::File;
use std::io::Write;
use std::path::Path;
use tokio_stream::StreamExt;

pub fn config(cfg: &mut ServiceConfig) {
    cfg.service(
        web::scope("patients")
            .wrap(AuthMiddleware::new(vec![
                UserRole::Admin,
                UserRole::Doctor,
                UserRole::Nurse,
            ]))
            .service(paginated_patients)
            .service(create_patient)
            .service(delete_patient)
            .service(single_patient),
    );
}

#[get("")]
async fn paginated_patients(
    db_service: web::Data<DBService>,
    pagination_path: web::Query<Pagination>,
) -> HandlerResult {
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

    let paginated_patients = Patient::patients_paginated(db_conn, pagination_path.into_inner())
        .await
        .map_err(|_| ErrorArchive::InternalServerError)?;

    Ok(HttpResponse::Ok().json(APIResponse::<Vec<Patient>> {
        response: Some(paginated_patients),
        errors: None,
        status_code: 200,
        success: true,
    }))
}

#[post("")]
async fn create_patient(db_service: web::Data<DBService>, mut payload: Multipart) -> HandlerResult {
    println!("Received a request to create a patient...");

    let mut db_conn = match db_service.pool.get() {
        Ok(conn) => conn,
        Err(e) => {
            println!("❌ Database connection error: {}", e);
            return Err(ErrorArchive::DatabaseError(e.to_string()));
        }
    };

    let upload_dir = "../uploads";
    if !Path::new(upload_dir).exists() {
        if let Err(e) = std::fs::create_dir_all(upload_dir) {
            println!("❌ Failed to create upload directory: {}", e);
            return Err(ErrorArchive::InternalServerError);
        }
    }

    let mut form_data = HashMap::new();
    let mut profile_photo = None;

    // Fix: Handle Result correctly in while let
    while let Ok(Some(field)) = payload.try_next().await {
        let content_disposition = field.content_disposition().cloned().unwrap();
        let field_name = content_disposition.get_name().unwrap_or("");

        println!("Processing form field: {}", field_name);

        if let Some(filename) = content_disposition.get_filename() {
            let filepath = format!("{}/{}", upload_dir, filename);
            profile_photo = Some(filepath.clone());

            match File::create(&filepath) {
                Ok(mut file) => {
                    println!("Saving uploaded file: {}", filepath);
                    // Fix: Handle bytes correctly
                    let mut field_stream = field;
                    while let Ok(Some(bytes)) = field_stream.try_next().await {
                        if let Err(e) = file.write_all(&bytes) {
                            println!("❌ Error writing file {}: {}", filepath, e);
                            return Err(ErrorArchive::InternalServerError);
                        }
                    }
                }
                Err(e) => {
                    println!("❌ Error creating file {}: {}", filepath, e);
                    return Err(ErrorArchive::InternalServerError);
                }
            }
        } else {
            let mut value = Vec::new();
            let mut field_stream = field;
            // Fix: Handle bytes correctly
            while let Ok(Some(bytes)) = field_stream.try_next().await {
                value.extend_from_slice(&bytes);
            }
            form_data.insert(
                field_name.to_string(),
                String::from_utf8_lossy(&value).to_string(),
            );
        }
    }

    println!("✅ Parsed form data: {:?}", form_data);

    let new_patient = NewPatient {
        name: form_data.get("name").cloned().unwrap_or_default(),
        nin: form_data.get("nin").cloned(),
        age: form_data.get("age").and_then(|v| v.parse().ok()),
        gender: form_data.get("gender").cloned(),
        patient_type: form_data
            .get("patient_type")
            .and_then(|v| match v.as_str() {
                "Inpatient" => Some(PatientType::Inpatient),
                "Outpatient" => Some(PatientType::Outpatient),
                "Emergency" => Some(PatientType::Emergency),
                _ => None,
            })
            .unwrap_or_default(),
        phone: form_data.get("phone").cloned(),
        profile_photo,
        address: form_data.get("address").cloned(),
        emergency_phone: form_data.get("emergency_phone").cloned(),
        registered_by: form_data.get("registered_by").and_then(|v| v.parse().ok()),
    };

    // Fix: Pass mutable reference to the connection
    // Fix: Pass mutable reference to the connection
    match PatientController::create_patient(&mut db_conn, new_patient).await {
        Ok(patient) => {
            println!("✅ Successfully saved patient to DB!");
            Ok(HttpResponse::Created().json(APIResponse::<Patient> {
                response: Some(patient),
                errors: None,
                status_code: 201,
                success: true,
            }))
        }
        Err(e) => {
            println!("❌ Error saving patient to DB: {:?}", e);

            // Convert the error to a more informative response
            // Check if this is a validation error (typically contains field names)
            let error_str = format!("{:?}", e);

            // If it looks like a validation error
            if error_str.contains("name")
                || error_str.contains("patient_type")
                || error_str.contains("age")
                || error_str.contains("gender")
            {
                // Return a BadRequest with the validation error details
                Ok(HttpResponse::BadRequest().json(APIResponse::<Patient> {
                    response: None,
                    errors: Some(e),
                    status_code: 400,
                    success: false,
                }))
            } else {
                // For other errors, return a 500 Internal Server Error
                Err(ErrorArchive::InternalServerError)
            }
        }
    }
}

#[delete("/{id}")]
async fn delete_patient(
    db_service: web::Data<DBService>,
    patient_id: web::Path<i32>,
) -> HandlerResult {
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

    PatientController::delete_patient(db_conn, *patient_id)
        .await
        .map_err(|_| ErrorArchive::InternalServerError)?;

    Ok(HttpResponse::Ok().json(APIResponse::<()> {
        response: None,
        errors: None,
        status_code: 200,
        success: true,
    }))
}

#[get("{id}")]
async fn single_patient(
    db_service: web::Data<DBService>,
    patient_id: web::Path<i32>,
) -> HandlerResult {
    // Get database connection
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|_| ErrorArchive::InternalServerError)?;

    // Get single patient
    let patient_id = patient_id.into_inner();

    let patient = Patient::get_patient_by_id(db_conn, patient_id)
        .await
        .map_err(|_| ErrorArchive::InternalServerError)?;

    Ok(HttpResponse::Ok().json(patient))
}
