
use phonelib;
use validator::ValidationError;

/// Validating phone number
pub fn validate_phone_number(phone_number: &str) -> ValidationResult {
    // Checking whether the phone number is valid
    if phonelib::is_valid_phone_number(phone_number.to_string()) {
        // Checking whether the phone number does not contain invalid characters
        return match phonelib::normalize_phone_number(phone_number.to_string()) {
            Some(_) => Ok(()),
            None => {
                let mut validation_error = ValidationError::new("invalid_characters");
                validation_error.message = Some("Phone number contains invalid characters".into());

                Err(validation_error)
            }
        };
    } else {
        let mut validation_error = ValidationError::new("invalid_characters");
        validation_error.message = Some("Invalid phone number provided!".into());

        return Err(validation_error);
    }
}
