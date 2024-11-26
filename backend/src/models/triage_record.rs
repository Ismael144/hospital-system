use crate::impls::serde_impls::option_bigdecimal_serialize;
use crate::schema::triage_records;
use bigdecimal::BigDecimal;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use serde::Serialize;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = triage_records)]
#[diesel(primary_key(triage_id))]
#[diesel(belongs_to(User, foreign_key = nurse_id), belongs_to(Visit))]
pub struct TriageRecord {
    #[serde(rename = "id")]
    pub triage_id: i32,
    pub visit_id: Option<i32>,
    pub nurse_id: Option<i32>,
    pub triage_time: Option<DateTime<Utc>>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub temperature: Option<BigDecimal>,
    pub blood_pressure: Option<String>,
    pub heart_rate: Option<i32>,
    pub respiratory_rate: Option<i32>,
    pub oxygen_saturation: Option<i32>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub weight: Option<BigDecimal>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub height: Option<BigDecimal>,
    pub symptoms: Option<String>,
    pub notes: Option<String>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub charges: Option<BigDecimal>,
    pub created_at: Option<DateTime<Utc>>,
}
