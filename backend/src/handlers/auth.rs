use super::{APIResponse, HandlerResult};
use crate::{
    auth::{
        auth::{AuthService, LoginCredentials, TokenResponse},
        middleware::AuthMiddleware,
    },
    db::connection::DBService,
    error_archive::ErrorArchive,
    extractors::bearer_token,
    models::user::{NewUser, User},
};
use actix_web::{
    get, post,
    web::{self, ServiceConfig},
    HttpResponse,
};
use diesel::prelude::*;
use serde_json::json;
use std::collections::HashMap;

pub fn config(cfg: &mut ServiceConfig) {
    cfg.service(
        web::scope("auth")
            .service(signin)
            .service(signup)
            .service(
                web::scope("verify")
                    .wrap(AuthMiddleware::new(vec![]))
                    .service(verify_authentication),
            )
            .service(
                web::scope("profile")
                    .wrap(AuthMiddleware::new(vec![]))
                    .service(auth_user_profile),
            ),
    );
}

#[post("signin")]
pub async fn signin(
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
        .filter(email.eq(login_credentials.email))
        .first::<User>(db_conn)
        .map_err(|_| ErrorArchive::InvalidCredentials)?;

    // Verify password
    if !AuthService::verify_password(&login_credentials.password, &user.password_hash)? {
        let mut error_hashmap = HashMap::<String, String>::new();

        error_hashmap.insert(
            "message".into(),
            "Invalid Email Password Combination".into(),
        );

        return Ok(
            HttpResponse::Unauthorized().json(APIResponse::<TokenResponse> {
                status_code: 401,
                success: false,
                errors: Some(error_hashmap),
                response: None,
            }),
        );
    }

    let token_response = AuthService::generate_token(&user)?;

    Ok(HttpResponse::Ok().json(APIResponse::<TokenResponse> {
        status_code: 200,
        success: true,
        errors: None,
        response: Some(token_response),
    }))
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
        Ok(created_user) => Ok(HttpResponse::Ok().json(APIResponse::<User> {
            status_code: 200,
            success: false,
            errors: None,
            response: Some(created_user),
        })),
        Err(errors) => Ok(HttpResponse::BadRequest().json(APIResponse::<User> {
            status_code: 400,
            success: false,
            errors: Some(errors),
            response: None,
        })),
    }
}

#[post("")]
pub async fn verify_authentication(bearer_token: bearer_token::BearerToken) -> HandlerResult {
    let token = bearer_token.token;

    if AuthService::validate_token(&token).is_err() {
        return Err(ErrorArchive::Unauthorized(
            json!({"is_valid": false}).to_string(),
        ));
    }

    Ok(HttpResponse::Ok().json(json!({
        "is_valid": false
    })))
}

#[get("")]
pub async fn auth_user_profile(
    db_service: web::Data<DBService>,
    bearer_token: bearer_token::BearerToken,
) -> HandlerResult {
    let db_conn = &mut db_service
        .pool
        .get()
        .map_err(|e| ErrorArchive::DatabaseError(e.to_string()))?;

    let auth_token = bearer_token.token.clone();

    let auth_user: User = AuthService::get_auth_user(db_conn, &auth_token).await?;
    Ok(HttpResponse::Ok().json(auth_user))
}
