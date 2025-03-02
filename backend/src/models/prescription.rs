use crate::impls::serde_impls::{option_uuid_serialize, uuid_serialize};
use crate::schema::prescriptions;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use serde::Serialize;
use uuid::Uuid;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = prescriptions)]
#[diesel(primary_key(prescription_id))]
pub struct Prescription {
    #[serde(rename = "id", with = "uuid_serialize")]
    pub prescription_id: Uuid,
    #[serde(with = "option_uuid_serialize")]
    pub consultation_id: Option<Uuid>,
    #[serde(with = "option_uuid_serialize")]
    pub medication_id: Option<Uuid>,
    pub dosage: String,
    pub frequency: String,
    pub duration_days: i32,
    pub notes: Option<String>,
    pub created_at: Option<DateTime<Utc>>,
}
