pub mod users;
pub mod auth;

use crate::error_archive::ErrorArchive;
use actix_web::{web, HttpResponse};

/// A Result returned by an actix-web route handler
type HandlerResult = Result<HttpResponse, ErrorArchive>;

/// Base handler configuration
///
/// Puts all handlers together and then attaches them to the app
pub fn base_handler_service_config(cfg: &mut web::ServiceConfig) {
    cfg.service(web::scope("api")
    .configure(users::config)
    .configure(auth::config)
    );
}
