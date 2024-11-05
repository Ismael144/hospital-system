use crate::models::DieselResult;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use crate::model::user::User;

#[derive(Debug, Clone, Copy, PartialEq, Eq, diesel_derive_enum::DbEnum)]
#[ExistingTypePath = "crate::schema::sql_types::ProcedureType"]
pub enum ProcedureType {
    Surgery,
    Diagnostic,
    Laboratory,
    Radiology,
    Physical,
    Other,
}

#[derive(Debug, Clone, Queryable,  Identifiable)]
#[diesel(table_name = procedures, primary_key(procedure_id), check_for_backend(diesel::pg::Pg))]
#[diesel(belongs_to(Visit), belongs_to(User, foreign_key = doctor_id))]
pub struct Procedure {
    pub procedure_id: i32,
    pub visit_id: Option<i32>,
    pub doctor_id: Option<i32>,
    pub procedure_type: ProcedureType,
    pub procedure_time: Option<DateTime<Utc>>,
    pub description: Option<String>,
    pub notes: Option<String>,
    pub charges: Option<BigDecimal>,
    pub created_at: Option<DateTime<Utc>>,
}
