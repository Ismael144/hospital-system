use crate::models::QueryResult;
use crate::schema::patients;
use chrono::NaiveDateTime;
use diesel::prelude::*;
use serde::Serialize;

#[derive(Debug, Clone, Copy, PartialEq, Eq, diesel_derive_enum::DbEnum, Serialize)]
#[ExistingTypePath = "crate::schema::sql_types::PatientType"]
pub enum PatientType {
    Inpatient,
    Outpatient,
    Emergency,
}

#[derive(Debug, Clone, Queryable, Identifiable, Serialize, Selectable)]
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
    pub registered_at: Option<NaiveDateTime>,
    pub updated_at: Option<NaiveDateTime>,
}

#[derive(Insertable, AsChangeset)]
#[diesel(table_name = patients)]
pub struct NewPatient<'a> {
    pub name: &'a str,
    pub nin: Option<&'a str>,
    pub age: Option<i32>,
    pub gender: Option<&'a str>,
    pub patient_type: PatientType,
    pub phone: Option<&'a str>,
    pub address: Option<&'a str>,
    pub emergency_contact: Option<&'a str>,
    pub emergency_phone: Option<&'a str>,
    pub registered_by: Option<i32>,
}

impl Patient {
    /// Create a new patient
    pub async fn new(
        db_conn: &mut PgConnection,
        new_patient: NewPatient<'_>,
    ) -> QueryResult<Patient> {
        // I'll probably do some data validation here
        diesel::insert_into(patients::table)
            .values(new_patient)
            .returning(Patient::as_returning())
            .get_result(db_conn)
    }

    /// Fetch all patients from database
    pub async fn select_all(db_conn: &mut PgConnection) -> QueryResult<Vec<Patient>> {
        patients::table.load(db_conn)
    }

    /// Update a given patient and then return the updated record
    pub async fn update_by_id(
        db_conn: &mut PgConnection,
        patient_id: i32,
        new_patient: NewPatient<'_>,
    ) -> QueryResult<Patient> {
        diesel::update(patients::table.filter(patients::dsl::patient_id.eq(patient_id)))
            .set(new_patient)
            .returning(Patient::as_returning())
            .get_result(db_conn)
    }

    /// Delete a given patient and returning the deleted patient
    pub async fn delete_by_id(
        db_conn: &mut PgConnection,
        patient_id: i32,
    ) -> QueryResult<Patient> {
        diesel::delete(patients::table.filter(patients::dsl::patient_id.eq(patient_id)))
            .returning(Patient::as_returning())
            .get_result(db_conn)
    }

    /// Checks if a patient exists by using their name
    async fn check_patient_existence_by_name(
        db_conn: &mut PgConnection,
        patient_name: &'_ str,
    ) -> QueryResult<Option<Patient>> {
        use crate::schema::patients::dsl::{name, nin};

        patients::table
            .filter(name.eq(patient_name))
            .select(Patient::as_select())
            .get_result(db_conn)
            .optional()
    }
    
    async fn check_patient_existence_by_nin(
        db_conn: &mut PgConnection,
        patient_nin: &'_ str,
    ) -> QueryResult<Option<Patient>> {
        use crate::schema::patients::dsl::nin;

        patients::table
            .filter(nin.eq_any(&[patient_nin]))
            .select(Patient::as_select())
            .get_result(db_conn)
            .optional()
    }
}
