#![allow(unused_imports)]

use super::APIResponse;
use super::HandlerResult;
use crate::auth::middleware::AuthMiddleware;
use crate::controllers::patient::PatientController;
use crate::models::Pagination;
use crate::models::{
    patient::{NewPatient, Patient, PatientType},
    user::UserRole,
};
use crate::{db::connection::DBService, error_archive::ErrorArchive};
use actix_multipart::form::MultipartForm;
use actix_web::{
    delete, get, post,
    web::{self, ServiceConfig},
    HttpResponse,
};
use uuid::Uuid;

pub fn config(cfg: &mut ServiceConfig) {
    cfg.service(
        web::scope("patients")
            .wrap(AuthMiddleware::new(vec![
                UserRole::Admin,
                UserRole::Doctor,
                UserRole::Nurse,
            ]))
            .service(paginated_patients)
            // .service(create_patient)
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
        results: Some(paginated_patients),
        errors: None,
        status_code: 200,
        success: true,
    }))
}

// #[post("")]
// pub async fn create_patient(form: PatientForm) -> Result<HttpResponse, Error> {
//     // Create a patient from form data
//     let mut patient = NewPatient {
//         name: form.name,
//         nin: form.nin,
//         age: form.age,
//         gender: form.gender,
//         patient_type: match form.patient_type.as_str() {
//             "inpatient" => PatientType::Inpatient,
//             "outpatient" => PatientType::Outpatient,
//             _ => PatientType::default(),
//         },
//         phone: form.phone,
//         profile_photo: None,
//         address: form.address,
//         emergency_phone: form.emergency_phone,
//         registered_by: form.registered_by.and_then(|id| Uuid::parse_str(&id).ok()),
//     };
    
//     // Handle file upload if present
//     if let Some(file) = form.profile_photo {
//         let upload_dir = "uploads";
//         std::fs::create_dir_all(upload_dir).expect("Failed to create upload directory");
        
//         let filename = format!(
//             "{}/patient_{}_{}.{}", 
//             upload_dir,
//             Uuid::new_v4(),
//             chrono::Utc::now().timestamp(),
//             file.content_type.subtype()
//         );
        
//         // Save file
//         file.save(&filename).await?;
//         patient.profile_photo = Some(filename);
//     }
    
//     // Validate patient data
//     if let Err(validation_errors) = patient.validate() {
//         return Ok(HttpResponse::BadRequest().json(validation_errors));
//     }
    
//     // Insert into database (just an example)
//     // let inserted_patient = db::insert_patient(&patient).await?;
    
//     Ok(HttpResponse::Ok().json(patient))
// }

#[delete("/{id}")]
async fn delete_patient(
    db_service: web::Data<DBService>,
    patient_id: web::Path<String>,
) -> HandlerResult {
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

    let patient_id = Uuid::parse_str(&patient_id.into_inner()).unwrap();

    PatientController::delete_patient(db_conn, patient_id)
        .await
        .map_err(|_| ErrorArchive::InternalServerError)?;

    Ok(HttpResponse::Ok().json(APIResponse::<()> {
        results: None,
        errors: None,
        status_code: 200,
        success: true,
    }))
}

#[get("{id}")]
async fn single_patient(
    db_service: web::Data<DBService>,
    patient_id: web::Path<String>,
) -> HandlerResult {
    // Get database connection
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|_| ErrorArchive::InternalServerError)?;

    // Get single patient
    let patient_id = Uuid::parse_str(&patient_id.into_inner()).unwrap();

    let patient = Patient::get_patient_by_id(db_conn, patient_id)
        .await
        .map_err(|_| ErrorArchive::InternalServerError)?;

    Ok(HttpResponse::Ok().json(patient))
}
