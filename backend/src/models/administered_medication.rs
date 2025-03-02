use crate::impls::serde_impls::{option_bigdecimal_serialize, option_naive_date_time_serialize, option_uuid_serialize, uuid_serialize};
use crate::schema::administered_medications;
use bigdecimal::BigDecimal;
use chrono::NaiveDateTime;
use diesel::prelude::*;
use serde::Serialize;
use uuid::Uuid;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = administered_medications)]
#[diesel(primary_key(admin_id))]
pub struct AdministeredMedication {
    #[serde(rename = "id", with = "uuid_serialize")]
    pub admin_id: Uuid,
    #[serde(with = "option_uuid_serialize")]
    pub prescription_id: Option<Uuid>,
    #[serde(with = "option_uuid_serialize")]
    pub nurse_id: Option<Uuid>,
    pub administered_at: Option<NaiveDateTime>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub charges: Option<BigDecimal>,
    pub notes: Option<String>,
    #[serde(with = "option_naive_date_time_serialize")]
    pub created_at: Option<NaiveDateTime>,
}
