use super::{bed::Bed, user::User};
use crate::schema::bed_allocations;
use bigdecimal::BigDecimal;
use chrono::{DateTime, Utc};
use diesel::prelude::*;

/// Bed Allocation model, model responsible for allocating bed to patient
#[derive(Debug, Clone, Queryable, Identifiable, Associations, Selectable)]
#[diesel(table_name = bed_allocations, check_for_backend(diesel::pg::Pg))]
#[diesel(primary_key(allocation_id))]
#[diesel(belongs_to(Bed), belongs_to(User, foreign_key = nurse_id))]
pub struct BedAllocation {
    pub allocation_id: i32,
    pub visit_id: Option<i32>,
    pub bed_id: Option<i32>,
    pub nurse_id: Option<i32>,
    pub start_time: Option<DateTime<Utc>>,
    pub end_time: Option<DateTime<Utc>>,
    pub daily_charge: BigDecimal,
    pub notes: Option<String>,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}
