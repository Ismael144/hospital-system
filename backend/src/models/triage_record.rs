use crate::models::DieselResult;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use crate::models::{user::User, visit::Visit}; 

#[derive(Debug, Clone, Queryable, Identifiable, Serialize)]
#[diesel(table_name = triage_records)]
#[diesel(primary_key(triage_id))]
#[diesel(belongs_to(User, foreign_key = nurse_id), belongs_to(Visit))]
pub struct TriageRecord {
    pub triage_id: i32,
    pub visit_id: Option<i32>,
    pub nurse_id: Option<i32>,
    pub triage_time: Option<DateTime<Utc>>,
    pub temperature: Option<BigDecimal>,
    pub blood_pressure: Option<String>,
    pub heart_rate: Option<i32>,
    pub respiratory_rate: Option<i32>,
    pub oxygen_saturation: Option<i32>,
    pub weight: Option<BigDecimal>,
    pub height: Option<BigDecimal>,
    pub symptoms: Option<String>,
    pub notes: Option<String>,
    pub charges: Option<BigDecimal>,
    pub created_at: Option<DateTime<Utc>>
}

