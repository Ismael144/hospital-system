use super::{patient::Patient, Pagination, QueryResult};
use crate::impls::serde_impls::{
    option_bigdecimal_serialize, option_uuid_serialize, uuid_serialize,
};
use crate::schema::visits;
use bigdecimal::BigDecimal;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Clone, Copy, PartialEq, Eq, diesel_derive_enum::DbEnum, Serialize, Deserialize)]
#[ExistingTypePath = "crate::schema::sql_types::VisitStatus"]
pub enum VisitStatus {
    Scheduled,
    CheckedIn,
    InProgress,
    Completed,
    Cancelled,
    NoShow,
}

#[derive(
    Debug, Clone, Queryable, Identifiable, Associations, Selectable, Serialize, Deserialize,
)]
#[diesel(table_name = visits, primary_key(visit_id), belongs_to(Patient))]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct Visit {
    #[serde(rename = "id", with = "uuid_serialize")]
    pub visit_id: Uuid,
    #[serde(with = "option_uuid_serialize")]
    pub patient_id: Option<Uuid>,
    pub visit_date: Option<DateTime<Utc>>,
    pub status: VisitStatus,
    pub complaint: Option<String>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub total_charges: Option<BigDecimal>,
    pub is_discharged: Option<bool>,
    pub discharge_date: Option<DateTime<Utc>>,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}

#[derive(Insertable, AsChangeset, Deserialize)]
#[diesel(table_name = visits)]
pub struct NewVisit {
    #[serde(with = "option_uuid_serialize")]
    pub patient_id: Option<Uuid>,
    pub visit_date: Option<DateTime<Utc>>,
    pub status: VisitStatus,
    pub complaint: Option<String>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub total_charges: Option<BigDecimal>,
    pub is_discharged: Option<bool>,
    pub discharge_date: Option<DateTime<Utc>>,
}

/// This struct represents the structure of having full patient record and visit record
#[derive(Serialize)]
pub struct VisitWithPatient {
    patient: Patient,
    visit: Visit,
}

impl Visit {
    /// Creating a new visit
    pub async fn new(db_conn: &mut PgConnection, new_visit: NewVisit) -> QueryResult<Visit> {
        diesel::insert_into(visits::table)
            .values(new_visit)
            .returning(Visit::as_returning())
            .get_result(db_conn)
    }

    /// Listing of paginated visits
    pub async fn select_paginated(
        db_conn: &mut PgConnection,
        pagination: Pagination,
    ) -> QueryResult<Vec<Visit>> {
        visits::table
            .limit(pagination.items_per_page)
            .offset(pagination.offset())
            .load::<Visit>(db_conn)
    }
}
