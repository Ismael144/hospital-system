use super::APIResponse;
use super::HandlerResult;
use crate::auth::middleware::AuthMiddleware;
use crate::controllers::bed_controller::BedController;
use crate::db::connection::DBService;
use crate::error_archive::ErrorArchive;
use crate::models::{
    bed::{Bed, NewBed},
    user::UserRole,
};
use crate::models::{Pagination, PaginationResponse};
use actix_web::{
    delete, get, post, put,
    web::{self, ServiceConfig},
    HttpResponse,
};
use uuid::Uuid;

pub fn config(cfg: &mut ServiceConfig) {
    cfg.service(
        web::scope("beds")
            .wrap(AuthMiddleware::new(vec![UserRole::Admin, UserRole::Nurse]))
            .service(paginated_beds)
            .service(create_bed)
            .service(update_bed)
            .service(fetch_bed_by_id)
            .service(delete_bed),
    );
}

#[get("")]
pub async fn paginated_beds(
    db_service: web::Data<DBService>,
    pagination: web::Query<Pagination>,
) -> HandlerResult {
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|_| ErrorArchive::InternalServerError)?;
    let pagination = pagination.into_inner();

    Ok(HttpResponse::Ok().json(APIResponse::<PaginationResponse<Vec<Bed>>> {
        status_code: 200,
        errors: None,
        success: true,
        response: Some(PaginationResponse::<Vec<Bed>>::new(
            Bed::paginate(db_conn, pagination.clone())
                .await
                .map_err(|_| ErrorArchive::InternalServerError)?,
            pagination,
            Bed::row_count(db_conn)
                .await
                .map_err(|_| ErrorArchive::InternalServerError)? as usize,
        )),
    }))
}

#[post("")]
pub async fn create_bed(
    db_service: web::Data<DBService>,
    new_bed: web::Json<NewBed>,
) -> HandlerResult {
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;
    let new_bed = new_bed.into_inner();

    match BedController::create_bed(db_conn, new_bed).await {
        Ok(bed) => Ok(HttpResponse::Ok().json(APIResponse::<Bed> {
            status_code: 200,
            errors: None,
            response: Some(bed),
            success: true,
        })),
        Err(errors) => Ok(HttpResponse::BadRequest().json(APIResponse::<Bed> {
            status_code: 400,
            errors: Some(errors),
            response: None,
            success: false,
        })),
    }
}

#[put("{id}")]
pub async fn update_bed(
    db_service: web::Data<DBService>,
    bed_id: web::Path<String>,
    update_bed: web::Json<NewBed>,
) -> HandlerResult {
    // Initialize database
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|_| ErrorArchive::InternalServerError)?;

    // Extracting the
    let (update_bed, bed_id) = (
        update_bed.into_inner(),
        Uuid::parse_str(&bed_id.into_inner()).unwrap(),
    );

    // Update the bed here
    match BedController::update_bed(db_conn, bed_id, update_bed).await {
        Ok(updated_bed) => Ok(HttpResponse::Ok().json(APIResponse::<Bed> {
            status_code: 200,
            success: true,
            response: Some(updated_bed),
            errors: None,
        })),
        Err(errors) => Ok(HttpResponse::BadRequest().json(APIResponse::<Bed> {
            status_code: 400,
            success: false,
            response: None,
            errors: Some(errors),
        })),
    }
}

#[get("{id}")]
pub async fn fetch_bed_by_id(
    db_service: web::Data<DBService>,
    bed_id: web::Path<String>,
) -> HandlerResult {
    // Extract db connection
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|_| ErrorArchive::InternalServerError)?;

    // Extract bed id
    let bed_id = Uuid::parse_str(&bed_id.into_inner()).unwrap();

    match Bed::get_by_id(db_conn, bed_id)
        .await
        .map_err(|_| ErrorArchive::InternalServerError)?
    {
        Some(bed_record) => Ok(HttpResponse::Ok().json(APIResponse::<Bed> {
            response: Some(bed_record),
            errors: None,
            status_code: 200,
            success: true,
        })),
        None => Err(ErrorArchive::NotFound),
    }
}

#[delete("{bed_id}")]
pub async fn delete_bed(
    db_service: web::Data<DBService>,
    bed_id: web::Path<String>,
) -> HandlerResult {
    // Extract bed id
    let (db_conn, bed_id) = (
        &mut db_service
            .pool
            .get()
            .map_err(|_| ErrorArchive::InternalServerError)?,
        Uuid::parse_str(&bed_id.into_inner()).unwrap(),
    );

    // Delete bed from db
    let _ = BedController::delete_bed(db_conn, bed_id).await?;

    Ok(HttpResponse::Ok().json(APIResponse::<String> {
        status_code: 200,
        errors: None,
        response: Some(String::from("success")),
        success: true,
    }))
}
