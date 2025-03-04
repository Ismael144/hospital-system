use super::{APIResponse, HandlerResult};
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
    cfg.service(web::scope("prescriptions").service(prescriptions_paginated));
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
