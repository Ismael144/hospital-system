pub mod patient_controller;
pub mod user_controller;
pub mod visit_controller;
pub mod bed_controller;

use std::collections::HashMap;
use validator::Validate;

use crate::error_archive::ErrorArchive;

// This trait will be implemented by all controllers
trait Controller {}

// This type will be used for failure and success of an operation
type ControllerResult<T> = Result<T, ErrorArchive>;

// This result type will be used for field validations
type ValidationControllerResult<T> = Result<T, HashMap<String, String>>;

pub fn create_model_validate(creation_model: &impl Validate) -> ValidationControllerResult<()> {
    let mut error_hashmap: HashMap<String, String> = HashMap::new();

    return match creation_model.validate() {
        Ok(_) => Ok(()),
        Err(field_errors) => {
            for (field, errors) in field_errors.field_errors() {
                println!("{:?}, {:?}", field, errors);
                if let Some(error_message) = errors.first().and_then(|e| e.message.clone()) {
                    error_hashmap.insert(field.to_string(), error_message.to_string());
                }
            }

            Err(error_hashmap)
        }
    };
}
