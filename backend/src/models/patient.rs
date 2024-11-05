use crate::models::DieselResult;
use chrono::{DateTime, Utc};
use diesel::prelude::*;


#[derive(Debug, Clone, Copy, PartialEq, Eq, DbEnum)]
#[ExistingTypePath = "crate::schema::sql_types::PatientType"]
pub enum PatientType {
    Inpatient,
    Outpatient,
    Emergency,
}

#[derive(Debug, Clone, Queryable, Identifiable)]
#[diesel(table_name = patients, check_for_backend(diesel::pg::Pg))]
#[diesel(primary_key(patient_id))]
pub struct Patient {
    pub patient_id: i32,
    pub name: String,
    pub nin: Option<String>,
    pub age: Option<i32>,
    pub gender: Option<String>,
    pub patient_type: PatientType,
    pub phone: Option<String>,
    pub address: Option<String>,
    pub emergency_contact: Option<String>,
    pub emergency_phone: Option<String>,
    pub registered_by: Option<i32>,
    pub registered_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}
