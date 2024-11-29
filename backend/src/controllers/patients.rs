use diesel::PgConnection;

use super::ControllerResult;
use crate::models::patient::{NewPatient, Patient};
use validator::Validate;
use std::collections::HashMap; 

pub struct PatientController;


pub fn create_model_validate(creation_model: impl Validate) -> Result<(), HashMap<String, String>> {
    let mut error_hashmap: HashMap<String, String> = HashMap::new();

    return match creation_model.validate() {
        Ok(_) => Ok(()),
        Err(field_errors) => {
            for (field, errors) in field_errors.field_errors() {
                println!("{:?}, {:?}", field, errors);
                if let Some(error_message) = errors.first().and_then(|e| e.message.clone())
                {
                    error_hashmap.insert(field.to_string(), error_message.to_string());
                }
            }

            Err(error_hashmap)
        }
    };
}

impl PatientController {
    pub fn create_patient(
        db_conn: &mut PgConnection,
        new_patient: NewPatient,
    ) -> ControllerResult<()> {
        match create_model_validate(new_patient) {
            Ok(_) => {
                // Do database validations here!
                

                Ok(())
            }, 
            Err(error_hashmap) => Err(error_hashmap)
        }
    }
}
