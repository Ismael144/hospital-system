use super::{bed_allocation::BedAllocation, Model, Pagination, QueryResult};
use crate::field_validations::is_empty;
use crate::impls::serde_impls::uuid_serialize;
use crate::schema::beds;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use validator::Validate;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = beds, check_for_backend(diesel::pg::Pg))]
#[diesel(primary_key(bed_id))]
pub struct Bed {
    #[serde(rename = "id", with = "uuid_serialize")]
    pub bed_id: Uuid,
    pub bed_number: String,
    pub ward: String,
    pub is_occupied: Option<bool>,
    pub notes: Option<String>,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}

/// This struct will be used for data entries
#[derive(Insertable, AsChangeset, Validate, Deserialize)]
#[diesel(table_name = beds)]
pub struct NewBed {
    #[validate(custom(function = "is_empty"))]
    pub bed_number: String,
    #[validate(custom(function = "is_empty"))]
    pub ward: String,
    pub is_occupied: Option<bool>,
    pub notes: String,
}

#[derive(Serialize)]
pub struct BedWithAllocations {
    #[serde(flatten)]
    bed: Bed,
    allocations: Vec<BedAllocation>,
}

impl Model for Bed {}

impl Model for Vec<Bed> {}

/// Implementation for the Bed model
impl Bed {
    /// Create a new bed into database
    pub async fn new(db_conn: &mut PgConnection, new_bed: NewBed) -> QueryResult<Bed> {
        diesel::insert_into(beds::table)
        .values(new_bed)
        .returning(Bed::as_returning())
        .get_result(db_conn)
    }

    /// Returns the row count of the table
    pub async fn row_count(db_conn: &mut PgConnection) -> QueryResult<i64> {
        beds::table.count().get_result::<i64>(db_conn)
    }
    
    /// Paginated representation for select all
    pub async fn paginate(
        connection: &mut PgConnection,
        pagination: Pagination,
    ) -> QueryResult<Vec<Bed>> {
        beds::table
            .limit(pagination.items_per_page)
            .offset(pagination.offset())
            .load::<Bed>(connection)
    }

    /// Fetch all beds from database
    pub async fn select_all(db_conn: &mut PgConnection) -> QueryResult<Vec<Bed>> {
        beds::table.load::<Bed>(db_conn)
    }

    pub async fn get_by_id(db_conn: &mut PgConnection, bed_id: Uuid) -> QueryResult<Option<Bed>> {
        beds::table
            .filter(crate::schema::beds::dsl::bed_id.eq(bed_id))
            .get_result(db_conn)
            .optional()
    }

    pub async fn get_bed_by_bed_number(
        db_conn: &mut PgConnection,
        bed_number: String,
    ) -> QueryResult<Option<Self>> {
        beds::table
            .filter(beds::dsl::bed_number.eq(bed_number))
            .select(Bed::as_select())
            .get_result(db_conn)
            .optional()
    }

    /// Will check whether a bed queryed by bed_number field exists
    pub async fn is_bed_number_unique(
        db_conn: &mut PgConnection,
        bed_number: &String,
    ) -> QueryResult<bool> {
        beds::table
            .filter(beds::dsl::bed_number.eq(bed_number.clone()))
            .select(Bed::as_select())
            .get_result(db_conn)
            .optional()
            .map(|bed| bed.is_some())
    }

    /// Update bed record by ID
    pub async fn update_bed_by_id(
        db_conn: &mut PgConnection,
        bed_id: Uuid,
        new_bed: NewBed,
    ) -> QueryResult<Bed> {
        diesel::update(beds::table.filter(beds::dsl::bed_id.eq(bed_id)))
            .set(new_bed)
            .returning(Bed::as_returning())
            .get_result(db_conn)
    }

    /// Delete bed from database
    pub async fn delete_bed(db_conn: &mut PgConnection, bed_id: Uuid) -> QueryResult<Bed> {
        diesel::delete(beds::table.filter(beds::dsl::bed_id.eq(bed_id)))
            .returning(Bed::as_returning())
            .get_result(db_conn)
    }

    // pub async fn fetch_allocations_with_bed(db_conn: &mut PgConnection) -> QueryResult<BedWithAllocations> {

    // }
}
