use crate::models::DieselResult;
use chrono::{DateTime, Utc};
use diesel::prelude::*;

#[derive(Debug, Clone, Queryable, Identifiable)]
#[diesel(table_name = administered_medications)]
#[diesel(primary_key(admin_id))]
pub struct AdministeredMedication {
    pub admin_id: i32,
    pub prescription_id: Option<i32>,
    pub nurse_id: Option<i32>,
    pub administered_at: Option<DateTime<Utc>>,
    pub charges: Option<BigDecimal>,
    pub notes: Option<String>,
    pub created_at: Option<DateTime<Utc>>,
}
