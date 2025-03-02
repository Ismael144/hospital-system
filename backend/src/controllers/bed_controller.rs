use super::{create_model_validate, Controller, ValidationControllerResult, ControllerResult};
use crate::models::bed::{Bed, NewBed};
use diesel::PgConnection;
use std::collections::HashMap;
use crate::error_archive::ErrorArchive; 
use uuid::Uuid; 

pub struct BedController;

impl Controller for BedController {}

impl BedController {
    /// Create new bed in database
    /// Will do some validations like checking if ward and bed_number are empty
    pub async fn create_bed(
        db_conn: &mut PgConnection,
        new_bed: NewBed,
    ) -> ValidationControllerResult<Bed> {
        // I will do some validations before creating a new bed
        // Do validations for bed number and ward
        match create_model_validate(&new_bed) {
            Ok(_) => {
                let mut error_hashmap = HashMap::<String, String>::new();

                // Do the validations here
                if Bed::is_bed_number_unique(db_conn, &new_bed.bed_number)
                    .await
                    .unwrap()
                {
                    error_hashmap.insert(
                        "bed_number".to_string(),
                        format!("Bed number '{}' already registered!", new_bed.bed_number),
                    );
                }

                if error_hashmap.len() == 0 {
                    // Do the bed record insertion
                    return Ok(Bed::new(db_conn, new_bed).await.unwrap());
                } else {
                    return Err(error_hashmap);
                }
            }
            Err(e) => Err(e),
        }
    }

    /// Update bed by id
    pub async fn update_bed(
        db_conn: &mut PgConnection,
        bed_id: Uuid,
        update_bed: NewBed,
    ) -> ValidationControllerResult<Bed> {
        // Do validations for bed number and ward
        match create_model_validate(&update_bed) {
            Ok(_) => {
                let mut error_hashmap = HashMap::<String, String>::new();
                let current_updated_bed =
                    Bed::get_bed_by_bed_number(db_conn, update_bed.bed_number.clone()).await.unwrap();

                // Do the validations here
                if Bed::is_bed_number_unique(db_conn, &update_bed.bed_number)
                    .await
                    .unwrap()
                    && current_updated_bed.bed_number != update_bed.bed_number.clone()
                {
                    error_hashmap.insert(
                        "bed_number".to_string(),
                        format!("Bed number '{}' already registered!", update_bed.bed_number),
                    );
                }

                if error_hashmap.len() == 0 {
                    // Do the bed record insertion
                    return Ok(Bed::update_bed_by_id(db_conn, bed_id, update_bed)
                        .await
                        .unwrap());
                } else {
                    return Err(error_hashmap);
                }
            }
            Err(e) => Err(e),
        }
    }

    /// Delete bed record
    pub async fn delete_bed(db_conn: &mut PgConnection, bed_id: Uuid) -> ControllerResult<()> {
        match Bed::delete_bed(db_conn, bed_id).await {
            Ok(_) => Ok(()),  
            Err(_) => Err(ErrorArchive::NotFound)
        }
    }
}
