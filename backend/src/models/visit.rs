use crate::models::DieselResult;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use crate::model::patient::Patient;

#[derive(Debug, Clone, Copy, PartialEq, Eq, diesel_derive_enum::DbEnum)]
#[ExistingTypePath = "crate::schema::sql_types::VisitStatus"]
pub enum VisitStatus {
    Scheduled,
    CheckedIn,
    InProgress,
    Completed,
    Cancelled,
    NoShow,
}

#[derive(Debug, Clone, Queryable, Identifiable, Associations)]
#[diesel(table_name = visits, primary_key(visit_id), belongs_to(Patient))]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct Visit {
    pub visit_id: i32,
    pub patient_id: Option<i32>,
    pub visit_date: Option<DateTime<Utc>>,
    pub status: VisitStatus,
    pub complaint: Option<String>,
    pub total_charges: Option<BigDecimal>,
    pub is_discharged: Option<bool>,
    pub discharge_date: Option<DateTime<Utc>>,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}