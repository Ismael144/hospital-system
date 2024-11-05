use crate::models::DieselResult;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use crate::model::patient::Patient;

#[derive(Debug, Clone, Queryable, Identifiable, Serialize)]
#[diesel(table_name = medications)]
#[diesel(primary_key(medication_id))]
pub struct Medication {
    pub medication_id: i32,
    pub name: String,
    pub description: Option<String>,
    pub unit_price: BigDecimal,
    pub requires_prescription: Option<bool>,
    pub is_active: Option<bool>,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}