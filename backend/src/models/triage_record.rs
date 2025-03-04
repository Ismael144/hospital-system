use crate::impls::serde_impls::{
    option_bigdecimal_serialize, option_uuid_serialize, uuid_serialize,
};
use crate::schema::triage_records;
use bigdecimal::BigDecimal;
use super::{visit::Visit, user::User};
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use validator::Validate;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = triage_records)]
#[diesel(primary_key(triage_id))]
#[diesel(belongs_to(User, foreign_key = nurse_id), belongs_to(Visit, foreign_key = visit_id))]
pub struct TriageRecord {
    #[serde(rename = "id", with = "uuid_serialize")]
    pub triage_id: Uuid,
    #[serde(with = "option_uuid_serialize")]
    pub visit_id: Option<Uuid>,
    #[serde(with = "option_uuid_serialize")]
    pub nurse_id: Option<Uuid>,
    pub triage_time: Option<DateTime<Utc>>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub temperature: Option<BigDecimal>,
    pub blood_pressure: Option<String>,
    pub heart_rate: Option<i32>,
    pub respiratory_rate: Option<i32>,
    pub oxygen_saturation: Option<i32>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub weight: Option<BigDecimal>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub height: Option<BigDecimal>,
    pub symptoms: Option<String>,
    pub notes: Option<String>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub charges: Option<BigDecimal>,
    pub created_at: Option<DateTime<Utc>>,
}

#[derive(Insertable, Deserialize, Clone, Validate)]
#[diesel(table_name = triage_records)]
pub struct NewTriageRecord {
    #[serde(with = "option_uuid_serialize")]
    pub visit_id: Option<Uuid>,
    #[serde(with = "option_uuid_serialize")]
    pub nurse_id: Option<Uuid>,
    pub triage_time: Option<DateTime<Utc>>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub temperature: Option<BigDecimal>,
    pub blood_pressure: Option<String>,
    pub heart_rate: Option<i32>,
    pub respiratory_rate: Option<i32>,
    pub oxygen_saturation: Option<i32>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub weight: Option<BigDecimal>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub height: Option<BigDecimal>,
    pub symptoms: Option<String>,
    pub notes: Option<String>,
    #[serde(with = "option_bigdecimal_serialize")]
    pub charges: Option<BigDecimal>,
}

/// Will return data with full representations of visit and nurse data
#[derive(Serialize)]
pub struct TriageRecordVisitNurseRelationship {
    pub visit: Option<Visit>, 
    pub nurse: Option<User>, 
    pub triage_record: TriageRecord
}

impl TriageRecord {
    pub async fn new(
        pg_conn: &mut PgConnection,
        new_triage_record: NewTriageRecord,
    ) -> QueryResult<TriageRecord> {
        diesel::insert_into(triage_records::table)
            .values(new_triage_record)
            .returning(TriageRecord::as_returning())
            .get_result(pg_conn)
    }
}
