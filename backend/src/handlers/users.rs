use super::HandlerResult;
use crate::auth::middleware::AuthMiddleware;
use crate::db::connection::DBService;
use crate::error_archive::ErrorArchive;
use crate::models::{
    user::{NewUser, User, UserRole},
    Pagination, PaginationResponse,
};
use actix_multipart::form::{json::Json as MpJson, tempfile::TempFile, MultipartForm};
use actix_web::{delete, get, post};
use actix_web::{web, HttpResponse};
use serde::{Deserialize, Serialize};
use serde_json::json;
#[derive(Serialize, Deserialize, Debug)]
// Handling user avatar upload
struct Metadata {
    name: String,
}

#[derive(MultipartForm, Debug)]
struct AvatarUploadForm {
    #[multipart(limit = "100MB")]
    file: TempFile,
    metadata: MpJson<Metadata>,
}

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("users")
            .wrap(AuthMiddleware::new(vec![UserRole::Admin]))
            .service(get_all_users)
            .service(users_paginated)
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

#[get("paginated")]
pub async fn users_paginated(
    db_conn: web::Data<DBService>,
    pagination_path: web::Query<Pagination>,
) -> HandlerResult {
    let db_conn = &mut db_conn
        .pool
        .get()
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

    let pagination = pagination_path.into_inner();
    let paginated_users = User::select_paginated(db_conn, pagination.clone()).await?;
    let items_on_page_count = paginated_users.len();

    Ok(
        HttpResponse::Ok().json(PaginationResponse::<Vec<User>>::new(
            paginated_users,
            pagination,
            items_on_page_count,
        )),
    )
}

#[post("")]
pub async fn signup_user(
    db_service: web::Data<DBService>,
    new_user: web::Json<NewUser>,
    MultipartForm(form): MultipartForm<AvatarUploadForm>,
) -> HandlerResult {
    let create_user = new_user.into_inner();
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

    println!("{form:#?}");

    // todo: Hash password before storing new user
    let newly_created_user = User::create_user(db_conn, create_user).await?;

    Ok(HttpResponse::Ok().json(newly_created_user))
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
