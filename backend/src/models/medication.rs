use crate::impls::serde_impls::{
    bigdecimal_serialize, option_naive_date_time_serialize, uuid_serialize,
};
use crate::schema::medications;
use bigdecimal::BigDecimal;
use chrono::NaiveDateTime;
use diesel::prelude::*;
use serde::Serialize;
use uuid::Uuid;
use validator::Validate;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = medications)]
#[diesel(primary_key(medication_id))]
pub struct Medication {
    #[serde(rename = "id", with = "uuid_serialize")]
    pub medication_id: Uuid,
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

#[derive(Insertable, AsChangeset, Validate, Serialize)]
#[diesel(table_name = medications)]
pub struct NewMedication {
    pub name: String,
    pub description: String,
    #[serde(with = "bigdecimal_serialize")]
    pub unit_price: BigDecimal,
    pub requires_prescription: Option<bool>,
    pub is_active: Option<bool>,
}

impl Medication {
    /// Create a new medication record in database
    pub async fn new(
        db_conn: &mut PgConnection,
        new_medication: NewMedication,
    ) -> QueryResult<Medication> {
        diesel::insert_into(medications::table)
            .values(new_medication)
            .returning(Medication::as_returning())
            .get_result(db_conn)
    }

    // pub async fn medications_paginated()
}
