use super::{APIResponse, HandlerResult};
use crate::controllers::prescription::PrescriptionController;
use crate::{
    auth::middleware::AuthMiddleware,
    db::connection::DBService,
    error_archive::ErrorArchive,
    models::{
        prescription::{NewPrescription, Prescription, PrescriptionWithConsultationAndMedication},
        user::UserRole,
        Pagination, PaginationResponse,
    },
};
use actix_web::{delete, get, post, put, web, HttpResponse};
use uuid::Uuid;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("prescriptions")
            .wrap(AuthMiddleware::new(vec![UserRole::Admin, UserRole::Nurse]))
            .service(get_by_id)
            .service(update_prescription)
            .service(delete_prescription)
            .service(prescriptions_paginated),
    );
}

#[get("")]
pub async fn prescriptions_paginated(
    db_service: web::Data<DBService>,
    pagination: web::Query<Pagination>,
) -> HandlerResult {
    // Extract database connection and pagination query
    let (db_conn, pagination) = (
        &mut db_service
            .pool
            .get()
            .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?,
        pagination.into_inner(),
    );

    // Paginated prescription data and the whole table data row count
    let (paginated_prescription_data, row_count) = (
        Prescription::paginate_prescription(db_conn, pagination.clone())
            .await
            .map_err(|_| ErrorArchive::InternalServerError)?,
        Prescription::row_count(db_conn)
            .await
            .map_err(|_| ErrorArchive::InternalServerError)?,
    );

    Ok(HttpResponse::Ok().json(APIResponse::<
        PaginationResponse<Vec<PrescriptionWithConsultationAndMedication>>,
    > {
        status_code: 200,
        success: true,
        errors: None,
        results: Some(PaginationResponse::new(
            paginated_prescription_data,
            pagination,
            row_count,
        )),
    }))
}

#[get("{id}")]
pub async fn get_by_id(
    db_service: web::Data<DBService>,
    prescription_id: web::Path<String>,
) -> HandlerResult {
    // Extracting out the db_conn, prescription_id
    let (db_conn, prescription_id) = (
        &mut db_service
            .pool
            .get()
            .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?,
        Uuid::parse_str(&prescription_id.into_inner()).unwrap(),
    );

    match Prescription::get_by_id(db_conn, prescription_id)
        .await
        .unwrap()
    {
        Some(prescription) => Ok(HttpResponse::Ok().json(APIResponse::<
            PrescriptionWithConsultationAndMedication,
        > {
            status_code: 200,
            success: true,
            errors: None,
            results: Some(prescription),
        })),
        None => Err(ErrorArchive::NotFound),
    }
}

#[post("")]
pub async fn create_prescription(
    db_service: web::Data<DBService>,
    new_prescription: web::Json<NewPrescription>,
) -> HandlerResult {
    // Extracting db connection and prescription_id
    let (db_conn, new_prescription) = (
        &mut db_service
            .pool
            .get()
            .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?,
        new_prescription.into_inner(),
    );

    // Create a new prescription, also does field validations
    match PrescriptionController::create_prescription(db_conn, new_prescription).await {
        Ok(prescription) => Ok(HttpResponse::Ok().json(APIResponse::<Prescription> {
            status_code: 200,
            success: true,
            errors: None,
            results: Some(prescription),
        })),
        Err(error_hashmap) => Ok(
            HttpResponse::BadRequest().json(APIResponse::<Prescription> {
                status_code: 400,
                success: false,
                errors: Some(error_hashmap),
                results: None,
            }),
        ),
    }
}

#[put("")]
pub async fn update_prescription(
    db_service: web::Data<DBService>,
    update_prescription: web::Json<NewPrescription>,
    prescription_id: web::Path<String>,
) -> HandlerResult {
    // Extracting db connection and prescription_id
    let (db_conn, update_prescription, prescription_id) = (
        &mut db_service
            .pool
            .get()
            .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?,
        update_prescription.into_inner(),
        Uuid::parse_str(&prescription_id.into_inner()).unwrap(),
    );

    match PrescriptionController::update_prescription(db_conn, update_prescription, prescription_id)
        .await
    {
        Ok(updated_prescription) => Ok(HttpResponse::Ok().json(APIResponse::<Prescription> {
            status_code: 200,
            errors: None,
            results: Some(updated_prescription),
            success: true,
        })),
        Err(errors) => Ok(
            HttpResponse::BadRequest().json(APIResponse::<Prescription> {
                status_code: 400,
                success: false,
                errors: Some(errors),
                results: None,
            }),
        ),
    }
}

#[delete("{id}")]
pub async fn delete_prescription(
    db_service: web::Data<DBService>,
    prescription_id: web::Path<String>,
) -> HandlerResult {
    // Extracting db connection and prescription_id
    let (db_conn, prescription_id) = (
        &mut db_service
            .pool
            .get()
            .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?,
        Uuid::parse_str(&prescription_id.into_inner()).unwrap(),
    );

    PrescriptionController::delete_prescription(db_conn, prescription_id)
        .await
        .map(|_| {
            HttpResponse::Ok().json(APIResponse::<String> {
                status_code: 200,
                errors: None,
                results: Some(String::from("Success")),
                success: true,
            })
        })
}
