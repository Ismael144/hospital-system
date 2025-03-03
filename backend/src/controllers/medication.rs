use super::{new_model_validate, Controller, ControllerResult, ValidationControllerResult};
use crate::error_archive::ErrorArchive;
use crate::models::medication::{Medication, NewMedication};
use diesel::PgConnection;
use uuid::Uuid;

pub struct MedicationController;

impl Controller for MedicationController {}

impl MedicationController {
    /// Create new medication
    pub async fn create_medication(
        db_conn: &mut PgConnection,
        new_medication: NewMedication,
    ) -> ValidationControllerResult<Medication> {
        // Support for async closures
        // new_model_validate(&new_medication).map(async |_| {
        //     // Creating a new medication
        //     let created_medication = Medication::new(db_conn, new_medication).await.unwrap();

        //     // Check for duplicate name entry here

        //     Ok(created_medication)
        // })

        match new_model_validate(&new_medication) {
            Ok(_) => {
                // Creating a new medication
                let created_medication = Medication::new(db_conn, new_medication).await.unwrap();

                // Check for duplicate name entry here

                Ok(created_medication)
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
