use super::Pagination;
use crate::impls::serde_impls::{
    bigdecimal_serialize, option_naive_date_time_serialize, uuid_serialize,
};
use crate::schema::medications;
use bigdecimal::BigDecimal;
use chrono::NaiveDateTime;
use diesel::prelude::*;
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use validator::Validate;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize, Validate)]
#[diesel(table_name = medications)]
#[diesel(primary_key(medication_id))]
pub struct Medication {
    #[serde(rename = "id", with = "uuid_serialize")]
    pub medication_id: Uuid,
    #[validate(length(min = 2))]
    pub name: String,
    pub description: Option<String>,
    #[serde(with = "bigdecimal_serialize")]
    pub unit_price: BigDecimal,
    pub requires_prescription: Option<bool>,
    pub is_active: Option<bool>,
    #[serde(with = "option_naive_date_time_serialize")]
    pub created_at: Option<NaiveDateTime>,
    #[serde(with = "option_naive_date_time_serialize")]
    pub updated_at: Option<NaiveDateTime>,
}

#[derive(Insertable, AsChangeset, Validate, Deserialize)]
#[diesel(table_name = medications)]
pub struct NewMedication {
    pub name: String,
    pub description: String,
    #[serde(with = "bigdecimal_serialize")]
    pub unit_price: BigDecimal,
    pub requires_prescription: Option<bool>,
    pub is_active: Option<bool>,
}

impl Medication {
    /// Create a new medication record in database
    pub async fn new(
        db_conn: &mut PgConnection,
        new_medication: NewMedication,
    ) -> QueryResult<Self> {
        diesel::insert_into(medications::table)
            .values(new_medication)
            .returning(Medication::as_returning())
            .get_result(db_conn)
    }

    /// Paginated representation for select all
    pub async fn paginated_data(
        connection: &mut PgConnection,
        pagination: Pagination,
    ) -> QueryResult<Vec<Self>> {
        medications::table
            .limit(pagination.items_per_page)
            .offset(pagination.offset())
            .load::<Medication>(connection)
    }

    /// Row count for medications tables
    pub async fn row_count(db_conn: &mut PgConnection) -> QueryResult<i64> {
        medications::table.count().get_result::<i64>(db_conn)
    }

    /// Select single medication by id from database
    pub async fn get_medication_by_id(
        db_conn: &mut PgConnection,
        medication_id: Uuid,
    ) -> QueryResult<Option<Self>> {
        medications::table
            .filter(medications::dsl::medication_id.eq(medication_id))
            .get_result::<Self>(db_conn)
            .optional()
    }

    /// Delete medication from database
    pub async fn delete_medication(
        db_conn: &mut PgConnection,
        medication_id: Uuid,
    ) -> QueryResult<Self> {
        diesel::delete(medications::table)
            .filter(medications::dsl::medication_id.eq(medication_id))
            .returning(Medication::as_returning())
            .get_result::<Medication>(db_conn)
    }

    /// Update medication by ID
    pub async fn update_medication(
        db_conn: &mut PgConnection,
        medication_id: Uuid,
        update_medication: NewMedication,
    ) -> QueryResult<Self> {
        diesel::update(medications::table.filter(medications::dsl::medication_id.eq(medication_id)))
            .set(update_medication)
            .returning(Medication::as_returning())
            .get_result::<Self>(db_conn)
    }

    /// Will check whether the given name exists in the database
    pub async fn check_given_name_existence(
        db_conn: &mut PgConnection,
        name: String,
    ) -> QueryResult<Option<Self>> {
        medications::table
            .filter(medications::dsl::name.eq(name))
            .get_result::<Self>(db_conn)
            .optional()
    }
}
