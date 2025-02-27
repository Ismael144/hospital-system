use actix_web::{error::JsonPayloadError, HttpResponse, ResponseError};
use diesel::result::Error as DieselError;
use serde::{Serialize, Deserialize};
use serde_json::json;
use thiserror::Error;
use validator::ValidationErrors;

/// A collection of errors to be used in the project
#[derive(Error, Debug, Serialize, Deserialize, Clone)]
pub enum ErrorArchive {
    #[error("An internal server error occured...")]
    InternalServerError,
    #[error("Bad request: {0}")]
    BadRequest(String),
    #[error("The requested resource was not found...")]
    NotFound,
    #[error("Unauthorized: {0}")]
    Unauthorized(String),
    /// Error for json deserialization
    #[error("Invalid string: {0}")]
    SerdeValidationError(String),
    #[error("Database error: {0}")]
    DatabaseError(String),
    // Serde Error
    #[error("Json Payload Error: {0}")]
    JsonPayloadError(String),
    // For user authentication
    #[error("Invalid Email Password Combination")]
    InvalidCredentials,
    #[error("Invalid token")]
    InvalidToken,
    #[error("{0}")]
    ValidationError(String),
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

impl From<JsonPayloadError> for ErrorArchive {
    fn from(error: JsonPayloadError) -> ErrorArchive {
        ErrorArchive::JsonPayloadError(error.to_string())
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

impl From<ValidationErrors> for ErrorArchive {
    fn from(error: ValidationErrors) -> ErrorArchive {
        ErrorArchive::ValidationError(serde_json::to_string(&error).unwrap())
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
            }
            ErrorArchive::JsonPayloadError(_) => {
                HttpResponse::BadRequest().json(ErrorResponse::new(self))
            }
            ErrorArchive::InvalidCredentials => {
                HttpResponse::Unauthorized().json(ErrorResponse::new(self))
            }
            ErrorArchive::InvalidToken => {
                HttpResponse::Unauthorized().json(ErrorResponse::new(self))
            }
            ErrorArchive::ValidationError(_) => {
                HttpResponse::BadRequest().json(ErrorResponse::new(self))
            }
            // Mapping a serde deserialization error to BadRequest
            ErrorArchive::SerdeValidationError(message) => HttpResponse::BadRequest().json(json!({
                "error": "Validation error",
                "message": message
            })),
            ErrorArchive::DatabaseError(_) => {
                HttpResponse::InternalServerError().json(ErrorResponse::new(self))
            }
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
