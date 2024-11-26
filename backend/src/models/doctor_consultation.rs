use crate::impls::serde_impls::{option_bigdecimal_serialize, option_naive_date_time_serialize};
use crate::schema::doctor_consultations;
use bigdecimal::BigDecimal;
use chrono::NaiveDateTime;
use diesel::prelude::*;
use serde::Serialize;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = doctor_consultations)]
#[diesel(primary_key(consultation_id))]
pub struct DoctorConsultation {
    #[serde(rename = "id")]
    pub consultation_id: i32,
    pub visit_id: Option<i32>,
    pub doctor_id: Option<i32>,
    #[serde(with = "option_naive_date_time_serialize")]
    pub consultation_time: Option<NaiveDateTime>,
    pub diagnosis: Option<String>,
    pub notes: Option<String>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub charges: Option<BigDecimal>,
    pub discount_percentage: Option<i32>,
    pub discount_locked: Option<bool>,
    #[serde(with = "option_naive_date_time_serialize")]
    pub created_at: Option<NaiveDateTime>,
    #[serde(with = "option_naive_date_time_serialize")]
    pub updated_at: Option<NaiveDateTime>,
}
