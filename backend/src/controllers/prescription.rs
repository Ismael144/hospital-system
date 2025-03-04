use super::{new_model_validate, Controller, ControllerResult, ValidationControllerResult};
use crate::error_archive::ErrorArchive;
use crate::models::prescription::{NewPrescription, Prescription};
use diesel::PgConnection;
use futures::executor::block_on;
use std::collections::HashMap;
use uuid::Uuid;

pub struct PrescriptionController;

impl PrescriptionController {
    /// Create a new prescription into the database
    pub async fn create_prescription(
        db_conn: &mut PgConnection,
        new_prescription: NewPrescription,
    ) -> ValidationControllerResult<Prescription> {
        new_model_validate(&new_prescription).map(|_| {
            // Use block_on to drive the underlying future to completion
            block_on(Prescription::create_prescription(db_conn, new_prescription)).unwrap()
        })
    }

    /// Update a prescription by given uuid, and also validating the update data
    pub async fn update_prescription(
        db_conn: &mut PgConnection,
        update_prescription: NewPrescription,
        prescription_id: Uuid,
    ) -> ValidationControllerResult<Prescription> {
        match new_model_validate(&update_prescription) {
            Ok(_) => Ok(Prescription::update_prescription_by_id(
                db_conn,
                update_prescription,
                prescription_id,
            )
            .await
            .unwrap()),
            Err(error_hashmap) => Err(error_hashmap),
        }
    }
}
