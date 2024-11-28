use super::HandlerResult;
use crate::{
    auth::auth::{AuthService, LoginCredentials},
    db::connection::DBService,
    error_archive::ErrorArchive,
    models::user::{NewUser, User},
};
use actix_web::{
    post,
    web::{self, ServiceConfig},
    HttpResponse,
};
use diesel::prelude::*;
use serde_json::json;

pub fn config(cfg: &mut ServiceConfig) {
    cfg.service(web::scope("auth").service(login).service(signup));
}

#[post("login")]
pub async fn login(
    credentials: web::Json<LoginCredentials>,
    db: web::Data<DBService>,
) -> Result<HttpResponse, ErrorArchive> {
    use crate::schema::users::dsl::*;

    let db_conn = &mut db
        .pool
        .get()
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

    let login_credentials = credentials.into_inner();

    let user = crate::schema::users::table
        .filter(email.eq(login_credentials.username))
        .first::<User>(db_conn)
        .map_err(|_| ErrorArchive::InvalidCredentials)?;

    // Verify password
    if !AuthService::verify_password(&login_credentials.password, &user.password_hash)? {
        return Err(ErrorArchive::InvalidCredentials.into());
    }

    let token_response = AuthService::generate_token(&user)?;

    Ok(HttpResponse::Ok().json(token_response))
}

#[post("signup")]
pub async fn signup(
    db_service: web::Data<DBService>,
    user: Result<web::Json<NewUser>, actix_web::Error>,
) -> HandlerResult {
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;
    // Extracting the user
    let new_user = user
        .map_err(|e| ErrorArchive::JsonPayloadError(e.to_string()))?
        .into_inner();

    let user_creation_result = AuthService::signup(db_conn, new_user).await;

    match user_creation_result {
        Ok(created_user) => Ok(HttpResponse::Ok()
            .json(json!({"status_code": 200, "success": true, "user": created_user}))),
        Err(errors) => {
            // Change status code

            Ok(HttpResponse::BadRequest()
                .json(json!({"status_code": 400, "success": false, "errors": errors })))
        }
    }
}

// #[get("profile")]
// pub async fn profile(db_service: web::Data<DBService>, bearer_token: bearer_token::BearerToken) -> HandlerResult {
//     let db_conn = &mut db_service.pool.get().map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;
//     let auth_token = bearer_token.token.clone();

//     // I just unwrap without checking whether token is valid, because its already checked by the AuthMiddlewareService
//     let token_data = AuthService::validate_token(auth_token.as_str()).unwrap();

//     User::get_user_by_id(db_conn, token_data.claims.sub);

//     Ok(HttpResponse::Ok().json(token_data))
// }
