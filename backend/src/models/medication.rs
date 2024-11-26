use crate::impls::serde_impls::{bigdecimal_serialize, option_naive_date_time_serialize};
use crate::schema::medications;
use bigdecimal::BigDecimal;
use chrono::NaiveDateTime;
use diesel::prelude::*;
use serde::Serialize;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = medications)]
#[diesel(primary_key(medication_id))]
pub struct Medication {
    #[serde(rename = "id")]
    pub medication_id: i32,
    pub name: String,
    pub description: Option<String>,
    #[serde(with = "bigdecimal_serialize")]
    pub unit_price: BigDecimal,
    pub requires_prescription: Option<bool>,
    pub is_active: Option<bool>,
    #[serde(with = "option_naive_date_time_serialize")]
    pub created_at: Option<NaiveDateTime>,
    #[serde(with = "option_naive_date_time_serialize")]
    pub updated_at: Option<NaiveDateTime>,
}
