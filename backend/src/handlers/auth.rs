use crate::models::user::UserRole;
use crate::{
    auth::auth::{AuthService, LoginCredentials},
    db::connection::DBService,
    error_archive::ErrorArchive,
    models::user::User,
};
use actix_web::{
    get, post,
    web::{self, ServiceConfig},
    HttpResponse,
};
use diesel::prelude::*;
use serde_json::json;

pub fn config(cfg: &mut ServiceConfig) {
    cfg.service(web::scope("auth").service(login));
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
pub async fn signup(user: web::Json<NewUser>) -> HandlerResult {
    Ok(HttpResponse::Ok().json(json!({"message": "some message"})))
}
