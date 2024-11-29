pub mod users;
pub mod auth;
pub mod beds; 
pub mod bed_allocations; 
pub mod patients; 
pub mod invoices; 
pub mod medications;
pub mod prescriptions;
pub mod procedures;
pub mod triage_records;
pub mod visits;
pub mod doctor_consultations;
pub mod administered_medications;

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
