use crate::models::DieselResult;
use crate::schema::beds;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use serde::Serialize;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = beds, check_for_backend(diesel::pg::Pg))]
#[diesel(primary_key(bed_id))]
pub struct Bed {
    pub bed_id: i32,
    pub bed_number: String,
    pub ward: String,
    pub is_occupied: Option<bool>,
    pub notes: Option<String>,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}

/// This struct will be used for data entries
#[derive(Insertable, AsChangeset)]
#[diesel(table_name = beds)]
struct NewBed<'a> {
    pub bed_number: &'a str,
    pub ward: &'a str,
    pub is_occupied: Option<bool>,
    pub notes: Option<&'a str>,
}

/// Implementation for the Bed model
impl Bed {
    /// Create a new bed into database
    pub async fn new(db_conn: &mut PgConnection, new_bed: NewBed<'_>) -> DieselResult<Bed> {
        diesel::insert_into(beds::table)
            .values(new_bed)
            .returning(Bed::as_returning())
            .get_result(db_conn)
    }

    /// Fetch all beds from database
    pub async fn all(db_conn: &mut PgConnection) -> DieselResult<Vec<Bed>> {
        beds::table.load(db_conn)
    }
}
