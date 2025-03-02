use crate::impls::serde_impls::{
    option_bigdecimal_serialize, option_naive_date_time_serialize, option_uuid_serialize,
    uuid_serialize,
};
use crate::schema::procedures;
use bigdecimal::BigDecimal;
use chrono::NaiveDateTime;
use diesel::prelude::*;
use serde::Serialize;
use uuid::Uuid;

#[derive(Debug, Clone, Copy, PartialEq, Eq, diesel_derive_enum::DbEnum, Serialize)]
#[ExistingTypePath = "crate::schema::sql_types::ProcedureType"]
pub enum ProcedureType {
    Surgery,
    Diagnostic,
    Laboratory,
    Radiology,
    Physical,
    Other,
}

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = procedures, primary_key(procedure_id), check_for_backend(diesel::pg::Pg))]
#[diesel(belongs_to(Visit), belongs_to(User, foreign_key = doctor_id))]
pub struct Procedure {
    #[serde(rename = "id", with = "uuid_serialize")]
    pub procedure_id: Uuid,
    #[serde(with = "option_uuid_serialize")]
    pub visit_id: Option<Uuid>,
    #[serde(with = "option_uuid_serialize")]
    pub doctor_id: Option<Uuid>,
    pub procedure_type: ProcedureType,
    #[serde(with = "option_naive_date_time_serialize")]
    pub procedure_time: Option<NaiveDateTime>,
    pub description: Option<String>,
    pub notes: Option<String>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub charges: Option<BigDecimal>,
    pub is_modified: bool,
    #[serde(with = "option_naive_date_time_serialize")]
    pub created_at: Option<NaiveDateTime>,
}

impl Procedure {}
