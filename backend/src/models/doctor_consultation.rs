use crate::models::DieselResult;
use chrono::{DateTime, Utc};
use diesel::prelude::*;

#[derive(Debug, Clone, Queryable, Identifiable)]
#[diesel(table_name = doctor_consultations)]
#[diesel(primary_key(consultation_id))]
pub struct DoctorConsultation {
    pub consultation_id: i32,
    pub visit_id: Option<i32>,
    pub doctor_id: Option<i32>,
    pub consultation_time: Option<DateTime<Utc>>,
    pub diagnosis: Option<String>,
    pub notes: Option<String>,
    pub charges: Option<BigDecimal>,
    pub discount_percentage: Option<i32>,
    pub discount_locked: Option<bool>,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}
