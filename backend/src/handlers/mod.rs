pub mod users;

use actix_web::{web, HttpResponse};
use crate::error_archive::ErrorArchive;

type HandlerResult = Result<HttpResponse, ErrorArchive>; 

pub fn base_handler_service_config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/")
        .configure(users::config)
    ); 
}