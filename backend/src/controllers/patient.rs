use super::{new_model_validate, Controller, ControllerResult, ValidationControllerResult};
use crate::error_archive::ErrorArchive;
use crate::models::patient::{NewPatient, Patient};
use diesel::PgConnection;
use std::collections::HashMap;
use uuid::Uuid;

pub struct PatientController;

impl Controller for PatientController {}

impl PatientController {
    /// Create a new patient and also do validations
    pub async fn create_patient(
        db_conn: &mut PgConnection,
        new_patient: NewPatient,
    ) -> ValidationControllerResult<Patient> {
        match new_model_validate(&new_patient) {
            Ok(_) => {
                // Hashmap for backend validation
                let mut error_hashmap: HashMap<String, String> = HashMap::new();

                // Do database validations here!
                if let Some(ref patient_nin) = new_patient.nin {
                    if Patient::check_patient_existence_by_nin(db_conn, patient_nin)
                        .await
                        .unwrap()
                    {
                        error_hashmap.insert(
                            "nin".to_string(),
                            format!(
                                "The provided patient's NIN ('{}') is already registered!",
                                patient_nin
                            ),
                        );
                    }
                }

                if Patient::check_patient_existence_by_name(db_conn, &new_patient.name)
                    .await
                    .unwrap()
                {
                    error_hashmap.insert(
                        "name".to_string(),
                        format!(
                            "The provided patient's name ('{}') is already registered!",
                            new_patient.name
                        ),
                    );
                }

                if error_hashmap.len() == 0 {
                    // Do patient insertion into the database here!
                    let created_patient = Patient::new(db_conn, new_patient).await.unwrap();

                    Ok(created_patient)
                } else {
                    Err(error_hashmap)
                }
            }
            Err(error_hashmap) => Err(error_hashmap),
        }
    }

    pub async fn delete_patient(
        db_conn: &mut PgConnection,
        patient_id: Uuid,
    ) -> ControllerResult<Patient> {
        Patient::delete_by_id(db_conn, patient_id)
            .await
            .map_err(|_| ErrorArchive::NotFound)
    }
}
