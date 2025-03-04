use super::{APIResponse, HandlerResult};
use crate::{
    auth::middleware::AuthMiddleware,
    controllers::medication::MedicationController,
    db::connection::DBService,
    error_archive::ErrorArchive,
    models::{
        medication::{Medication, NewMedication},
        user::UserRole,
        Pagination, PaginationResponse,
    },
};
use actix_web::{delete, get, post, put, web, HttpResponse};
use uuid::Uuid;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("medications")
            .wrap(AuthMiddleware::new(vec![UserRole::Admin, UserRole::Nurse]))
            .service(medication_paginated)
            .service(get_medication_by_id)
            .service(create_medication)
            .service(update_medication)
            .service(delete_medication),
    );
}

#[get("")]
pub async fn medication_paginated(
    db_service: web::Data<DBService>,
    pagination: web::Query<Pagination>,
) -> HandlerResult {
    // Extract database connection
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|_| ErrorArchive::InternalServerError)?;

    // Extract the pagination
    let pagination = pagination.into_inner();

    // Extracting the medication pagination data
    let medication_paginated_data = Medication::paginated_data(db_conn, pagination.clone())
        .await
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

    // Extracting out the medication row count
    let medication_row_count: i64 = Medication::row_count(db_conn)
        .await
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

    // Creating a pagination response to return
    let medication_pagination_response = PaginationResponse::<Vec<Medication>>::new(
        medication_paginated_data,
        pagination,
        medication_row_count,
    );

    Ok(
        HttpResponse::Ok().json(APIResponse::<PaginationResponse<Vec<Medication>>> {
            errors: None,
            success: true,
            results: Some(medication_pagination_response),
            status_code: 200,
        }),
    )
}

#[post("")]
pub async fn create_medication(
    db_service: web::Data<DBService>,
    new_medication: web::Json<NewMedication>,
) -> HandlerResult {
    // Extract db connection
    let (db_conn, new_medication) = (
        &mut db_service
            .pool
            .get()
            .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?,
        new_medication.into_inner(),
    );

    match MedicationController::create_medication(db_conn, new_medication).await {
        Ok(medication) => Ok(HttpResponse::Created().json(APIResponse::<Medication> {
            status_code: 201,
            success: true,
            results: Some(medication),
            errors: None,
        })),
        Err(errors) => Ok(HttpResponse::BadRequest().json(APIResponse::<Medication> {
            status_code: 400,
            errors: Some(errors),
            success: false,
            results: None,
        })),
    }
}

#[delete("{id}")]
pub async fn delete_medication(
    db_service: web::Data<DBService>,
    medication_id: web::Path<String>,
) -> HandlerResult {
    // Delete functionality here
    // Extract db connection
    let (db_conn, medication_id) = (
        &mut db_service
            .pool
            .get()
            .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?,
        Uuid::parse_str(&medication_id.into_inner()).unwrap(),
    );

    // Delete functionality here
    let medication = MedicationController::delete_medication(db_conn, medication_id).await?;

    Ok(HttpResponse::Ok().json(APIResponse::<Medication> {
        success: true,
        status_code: 200,
        results: Some(medication),
        errors: None,
    }))
}

#[get("{id}")]
pub async fn get_medication_by_id(
    db_service: web::Data<DBService>,
    medication_id: web::Path<String>,
) -> HandlerResult {
    // Extracting db connection and medication id
    let (db_conn, medication_id) = (
        &mut db_service
            .pool
            .get()
            .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?,
        Uuid::parse_str(&medication_id.into_inner()).unwrap(),
    );

    match Medication::get_medication_by_id(db_conn, medication_id)
        .await
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?
    {
        Some(medication) => Ok(HttpResponse::Ok().json(APIResponse::<Medication> {
            status_code: 200,
            success: true,
            errors: None,
            results: Some(medication),
        })),
        None => Err(ErrorArchive::NotFound),
    }
}

#[put("{id}")]
pub async fn update_medication(
    db_service: web::Data<DBService>,
    update_medication: web::Json<NewMedication>,
    medication_id: web::Path<String>,
) -> HandlerResult {
    let (db_conn, update_medication, medication_id) = (
        &mut db_service
            .pool
            .get()
            .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?,
        update_medication.into_inner(),
        Uuid::parse_str(&medication_id.into_inner()).unwrap(),
    );

    // Do the update here
    match MedicationController::update_medication(db_conn, update_medication, medication_id).await {
        Ok(medication) => Ok(HttpResponse::Ok().json(APIResponse::<Medication> {
            success: true,
            status_code: 200,
            errors: None,
            results: Some(medication),
        })),
        Err(errors) => Ok(HttpResponse::BadRequest().json(APIResponse::<Medication> {
            success: false,
            status_code: 400,
            errors: Some(errors),
            results: None,
        })),
    }
}
