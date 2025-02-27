pub mod administered_medications;
pub mod auth;
pub mod bed_allocations;
pub mod beds;
pub mod doctor_consultations;
pub mod invoices;
pub mod medications;
pub mod patients;
pub mod prescriptions;
pub mod procedures;
pub mod triage_records;
pub mod uploads;
pub mod users;
pub mod visits;

use crate::error_archive::ErrorArchive;
use actix_web::{web, Error as ActixError, HttpResponse};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

/// A Result returned by an actix-web route handler
pub type HandlerResult = Result<HttpResponse, ErrorArchive>;

/// A Result if wrong or no payload delievered
pub type PayloadResult<M> = Result<M, ActixError>;

#[derive(Serialize, Deserialize)]
pub struct APIResponse<D: Serialize> {
    #[serde(rename = "status")]
    status_code: i32,
    success: bool,
    errors: Option<HashMap<String, String>>,
    response: Option<D>,
}

/// Base handler configuration
///
/// Puts all handlers together and then attaches them to the app
pub fn base_handler_service_config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("api")
            .configure(users::config)
            .configure(auth::config)
            .configure(patients::config)
            .configure(beds::config)
            .configure(uploads::config),
    );
}
