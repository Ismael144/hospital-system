use crate::schema::prescriptions;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use serde::Serialize;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = prescriptions)]
#[diesel(primary_key(prescription_id))]
pub struct Prescription {
    #[serde(rename = "id")]
    pub prescription_id: i32,
    pub consultation_id: Option<i32>,
    pub medication_id: Option<i32>,
    pub dosage: String,
    pub frequency: String,
    pub duration_days: i32,
    pub notes: Option<String>,
    pub created_at: Option<DateTime<Utc>>,
}
