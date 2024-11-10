use crate::db::connection::DBService;
use crate::error_archive::ErrorArchive;
use crate::error_archive::*;
use crate::handlers::HandlerResult;
use crate::models::user::{NewUser, User, UserRole};
use actix_web::{delete, patch, put};
use actix_web::{get, http::header::ContentType, post, Responder};
use actix_web::{web, HttpRequest, HttpResponse};
use serde_json::json;
use crate::middleware::auth::AuthMiddleware; 

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("users")
            .service(get_all_users)
            .wrap(AuthMiddleware::new(vec![UserRole::Admin]))
            .service(select_single_user)
            .service(delete_all_users),
    );
}

#[get("")]
pub async fn get_all_users(db_service: web::Data<DBService>) -> HandlerResult {
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

    // Fetch all users from database
    let users = User::select_all(db_conn)
        .await
        .map_err(|_| ErrorArchive::InternalServerError)?;
    Ok(HttpResponse::Ok().json(json!({"users": users})))
}

#[get("{id}")]
pub async fn select_single_user(
    db_service: web::Data<DBService>,
    user_id: web::Path<i32>,
) -> HandlerResult {
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

    // Get id passed in by user
    let user_id = user_id.into_inner();

    let user = User::get_user_by_id(db_conn, user_id)
        .await
        .map_err(|_| ErrorArchive::InternalServerError);

    Ok(HttpResponse::Ok().json(user))
}

#[delete("{user_id}")]
pub async fn delete_all_users(
    db_service: web::Data<DBService>,
    user_id_path: web::Path<i32>,
) -> HandlerResult {
    let user_id = user_id_path.into_inner();

    let db_service = &mut db_service
        .pool
        .get()
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

    let deleted_user = User::delete_by_id(db_service, user_id)
        .await
        .map_err(|_| ErrorArchive::InternalServerError);

    Ok(HttpResponse::Ok().json(deleted_user))
}

// #[post("")]
// pub async fn create_user(
//     db_service: web::Data<DBService>,
//     new_user: web::Json<NewUser>,
// ) -> HandlerResult {
//     let create_user = new_user.into_inner();
//     let db_conn = &mut db_service.pool.get().map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

//     // todo: Hash password before storing new user
//     let newly_created_user = User::create_user(db_conn, create_user);
// }
