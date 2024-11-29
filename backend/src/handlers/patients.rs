use super::HandlerResult;
use crate::models::Pagination;
use crate::{
    db::connection::DBService,
    error_archive::ErrorArchive,
    models::patient::Patient,
};
use actix_web::{
    get,
    web::{self, ServiceConfig},
    HttpResponse,
};

pub fn config(cfg: &mut ServiceConfig) {
    cfg.service(web::scope("patients"));
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

    Ok(HttpResponse::Ok().json(paginated_patients))
}
