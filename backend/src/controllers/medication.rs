use super::{new_model_validate, Controller, ControllerResult, ValidationControllerResult};
use crate::error_archive::ErrorArchive;
use crate::models::medication::{Medication, NewMedication};
use diesel::PgConnection;
use std::collections::HashMap;
use uuid::Uuid;

pub struct MedicationController;

impl Controller for MedicationController {}

impl MedicationController {
    /// Create new medication
    pub async fn create_medication(
        db_conn: &mut PgConnection,
        new_medication: NewMedication,
    ) -> ValidationControllerResult<Medication> {
        match new_model_validate(&new_medication) {
            Ok(_) => {
                // the error hashmap
                let mut error_hashmap: HashMap<String, String> = HashMap::<_, _>::new();

                // Check for duplicate name entry here
                if Medication::check_given_name_existence(db_conn, new_medication.name.clone())
                    .await
                    .unwrap()
                    .is_none()
                {
                    Ok(Medication::new(db_conn, new_medication).await.unwrap())
                } else {
                    error_hashmap.insert(
                        "name".to_string(),
                        format!(
                            "Medication with name '{}' is already registered!",
                            new_medication.name
                        ),
                    );

                    Err(error_hashmap)
                }
            }
            Err(err_hashmap) => Err(err_hashmap),
        }
    }

    pub async fn update_medication(
        db_conn: &mut PgConnection,
        update_medication: NewMedication,
        medication_id: Uuid,
    ) -> ValidationControllerResult<Medication> {
        match new_model_validate(&update_medication) {
            Ok(_) => {
                // the error hashmap
                let mut error_hashmap: HashMap<String, String> = HashMap::<_, _>::new();

                // let medication_to_update = Medication::get_by_id()

                // Creating a new medication
                let medication_by_name =
                    Medication::check_given_name_existence(db_conn, update_medication.name.clone())
                        .await
                        .unwrap();

                // Checking whether the medication name already exists in database
                if medication_by_name.is_some()
                    && medication_by_name
                        .map(|med| med.name.to_lowercase() != update_medication.name.to_lowercase())
                        .unwrap()
                {
                    error_hashmap.insert(
                        "name".to_string(),
                        format!(
                            "Medication '{}' is already registered!",
                            update_medication.name
                        ),
                    );
                }

                // If no field errors available
                if error_hashmap.len() == 0 {
                    // Do the update logic here
                    Ok(
                        Medication::update_medication(db_conn, medication_id, update_medication)
                            .await
                            .unwrap(),
                    )
                } else {
                    Err(error_hashmap)
                }
            }
            Err(err_hashmap) => Err(err_hashmap),
        }
    }

    /// Controller for delete medication
    pub async fn delete_medication(
        db_conn: &mut PgConnection,
        medication_id: Uuid,
    ) -> ControllerResult<Medication> {
        Medication::delete_medication(db_conn, medication_id)
            .await
            .map_err(|_| ErrorArchive::NotFound)
    }
}
