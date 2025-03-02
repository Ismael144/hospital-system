use super::{bed::Bed, user::User};
use crate::impls::serde_impls::{bigdecimal_serialize, option_uuid_serialize, uuid_serialize};
use crate::schema::bed_allocations;
use bigdecimal::BigDecimal;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use serde::Serialize;
use uuid::Uuid;

/// Bed Allocation model, model responsible for allocating bed to patient
#[derive(Debug, Clone, Queryable, Identifiable, Associations, Selectable, Serialize)]
#[diesel(table_name = bed_allocations, check_for_backend(diesel::pg::Pg))]
#[diesel(primary_key(allocation_id))]
#[diesel(belongs_to(Bed), belongs_to(User, foreign_key = nurse_id))]
pub struct BedAllocation {
    #[serde(rename = "id", with = "uuid_serialize")]
    pub allocation_id: Uuid,
    #[serde(with = "option_uuid_serialize")]
    pub visit_id: Option<Uuid>,
    #[serde(with = "option_uuid_serialize")]
    pub bed_id: Option<Uuid>,
    #[serde(with = "option_uuid_serialize")]
    pub nurse_id: Option<Uuid>,
    pub start_time: Option<DateTime<Utc>>,
    pub end_time: Option<DateTime<Utc>>,
    #[serde(with = "bigdecimal_serialize")]
    pub daily_charge: BigDecimal,
    pub notes: Option<String>,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}
