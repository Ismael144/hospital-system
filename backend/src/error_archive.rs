use actix_web::{HttpResponse, ResponseError};
use serde::Serialize;
use thiserror::Error;

/// A collection of errors to be used in the project
#[derive(Error, Debug)]
pub enum ErrorArchive {
    #[error("An internal server error occured...")]
    InternalServerError,
    #[error("Bad request: {0}")]
    BadRequest(String),
    #[error("Not Found")]
    NotFound,
    #[error("Unauthorized: {0}")]
    Unauthorized(String),
}

#[derive(Debug, Serialize)]
struct ErrorResponse {
    message: String,
}

impl ErrorResponse {
    fn new(error: &ErrorArchive) -> Self {
        Self {
            message: error.to_string(),
        }
    }
}

impl ResponseError for ErrorArchive {
    fn error_response(&self) -> HttpResponse {
        match self {
            ErrorArchive::InternalServerError => {
                HttpResponse::InternalServerError().json(ErrorResponse::new(self))
            }
            ErrorArchive::BadRequest(_) => {
                HttpResponse::BadRequest().json(ErrorResponse::new(self))
            }
            ErrorArchive::NotFound => HttpResponse::NotFound().json(ErrorResponse::new(self)),
            ErrorArchive::Unauthorized(_) => {
                HttpResponse::Unauthorized().json(ErrorResponse::new(self))
            }
        }
    }
}
