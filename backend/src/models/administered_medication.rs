use crate::schema::administered_medications;
use bigdecimal::BigDecimal;
use chrono::NaiveDateTime;
use diesel::prelude::*;
use serde::Serialize; 
use crate::impls::serde_impls::{option_bigdecimal_serialize, option_naive_date_time_serialize}; 

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = administered_medications)]
#[diesel(primary_key(admin_id))]
pub struct AdministeredMedication {
    #[serde(rename = "id")]
    pub admin_id: i32,
    pub prescription_id: Option<i32>,
    pub nurse_id: Option<i32>,
    pub administered_at: Option<NaiveDateTime>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub charges: Option<BigDecimal>,
    pub notes: Option<String>,
    #[serde(with = "option_naive_date_time_serialize")]
    pub created_at: Option<NaiveDateTime>,
}
