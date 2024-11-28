pub mod _common;
pub mod patient;
pub mod user;

use validator::ValidationError;

pub type ValidationResult = Result<(), ValidationError>;
