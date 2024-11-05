use crate::db::connection::DBService;
use crate::error_archive::ErrorArchive;
use crate::models::user::{NewUser, User};
use actix_web::{get, http::header::ContentType, post, Responder};
use actix_web::{web, HttpRequest, HttpResponse};
use serde_json::json; 

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("users/")
        // .service()
    );
}
