use crate::impls::serde_impls::{option_bigdecimal_serialize, option_naive_date_time_serialize};
use crate::models::user::User;
use crate::models::QueryResult;
use crate::schema::procedures;
use bigdecimal::BigDecimal;
use chrono::NaiveDateTime;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use serde::{Deserialize, Serialize};

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
    pub procedure_id: i32,
    pub visit_id: Option<i32>,
    pub doctor_id: Option<i32>,
    pub procedure_type: ProcedureType,
    #[serde(with = "option_naive_date_time_serialize")]
    pub procedure_time: Option<NaiveDateTime>,
    pub description: Option<String>,
    pub notes: Option<String>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub charges: Option<BigDecimal>,
    #[serde(with = "option_naive_date_time_serialize")]
    pub created_at: Option<NaiveDateTime>,
}
