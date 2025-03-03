use super::{new_model_validate, Controller, ValidationControllerResult};
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
        match new_model_validate(&new_medication) {
            Ok(_) => {
                // Creating a new medication
                let created_medication = Medication::new(db_conn, new_medication).await.unwrap();

                Ok(created_medication)
            }
            Err(err_hashmap) => Err(err_hashmap),
        }
    }
}
