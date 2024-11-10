use actix_web::{error::JsonPayloadError, http::StatusCode, HttpResponse, ResponseError};
use diesel::result::Error as DieselError;
use serde::Serialize;
use serde_json::json;
use thiserror::Error;

/// A collection of errors to be used in the project
#[derive(Error, Debug, Serialize)]
pub enum ErrorArchive {
    #[error("An internal server error occured...")]
    InternalServerError,
    #[error("Bad request: {0}")]
    BadRequest(String),
    #[error("Requested Resource Not Found")]
    NotFound,
    #[error("Unauthorized: {0}")]
    Unauthorized(String),
    /// Error for json deserialization
    #[error("Invalid string: {0}")]
    SerdeValidationError(String),
    #[error("Database error: {0}")]
    DatabaseError(String),
    // For user authentication 
    #[error("Invalid credentials")]
    InvalidCredentials, 
    #[error("Invalid token")]
    InvalidToken, 
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

impl From<DieselError> for ErrorArchive {
    fn from(error: DieselError) -> ErrorArchive {
        match error {
            DieselError::NotFound => ErrorArchive::NotFound,
            _ => ErrorArchive::DatabaseError(error.to_string()),
        }
    }
}

/// Mapping errors to other error types e.g. for actix web
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
            }, 
            ErrorArchive::InvalidCredentials => {
                HttpResponse::Unauthorized().json(ErrorResponse::new(self))
            }, 
            ErrorArchive::InvalidToken => {
                HttpResponse::Unauthorized().json(ErrorResponse::new(self))
            }, 
            // Mapping a serde deserialization error to BadRequest
            ErrorArchive::SerdeValidationError(message) => HttpResponse::BadRequest().json(json!({
                "error": "Validation error",
                "message": message
            })),
            ErrorArchive::DatabaseError(_) => {
                HttpResponse::InternalServerError().json(ErrorResponse::new(self))
            },
        }
    }
}

// Extension trait for serde error
pub trait SerdeValidationExt<T> {
    fn validate(self) -> Result<T, ErrorArchive>;
}

impl<T> SerdeValidationExt<T> for Result<T, serde_json::Error> {
    fn validate(self) -> Result<T, ErrorArchive> {
        self.map_err(|e| ErrorArchive::SerdeValidationError(e.to_string()))
    }
}
