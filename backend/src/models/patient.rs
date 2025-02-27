use super::visit::Visit;
use super::Pagination;
use super::QueryResult;
use crate::field_validations::{is_empty, validate_phone_number};
use crate::schema::patients;
use chrono::NaiveDateTime;
use diesel::prelude::*;
use serde::{Deserialize, Serialize};
use validator::Validate;

#[derive(Debug, Default, Clone, Copy, PartialEq, Eq, diesel_derive_enum::DbEnum, Serialize, Deserialize)]
#[ExistingTypePath = "crate::schema::sql_types::PatientType"]
pub enum PatientType {
    #[default]
    Inpatient,
    Outpatient,
    Emergency,
}

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize, Deserialize)]
#[diesel(table_name = patients, check_for_backend(diesel::pg::Pg))]
#[diesel(primary_key(patient_id), belongs_to(User, foreign_key = registered_by))]
pub struct Patient {
    #[serde(rename = "id")]
    pub patient_id: i32,
    pub name: String,
    pub nin: Option<String>,
    pub age: Option<i32>,
    pub gender: Option<String>,
    pub patient_type: PatientType,
    pub phone: Option<String>,
    pub profile_photo: Option<String>, 
    pub address: Option<String>,
    pub emergency_phone: Option<String>,
    pub registered_by: Option<i32>,
    #[serde(skip_serializing)]
    pub registered_at: Option<NaiveDateTime>,
    #[serde(skip_serializing)]
    pub updated_at: Option<NaiveDateTime>,
}

#[derive(Insertable, AsChangeset, Validate, Clone, Deserialize)]
#[diesel(table_name = patients)]
pub struct NewPatient {
    #[validate(
        custom(function = "is_empty"),
        length(min = 4, message = "Please enter a name with atleast 4 characters!")
    )]
    pub name: String,
    #[validate(
        custom(function = "is_empty"),
        length(min = 14, max = 14, message = "Please enter a valid nin number!")
    )]
    pub nin: Option<String>,
    #[validate(range(
        min = 0,
        max = 165,
        message = "Please provide a valid age in range between 0 - 165"
    ))]
    pub age: Option<i32>,
    #[validate(custom(function = "is_empty"))]
    pub gender: Option<String>,
    pub patient_type: PatientType,
    #[validate(
        custom(function = "is_empty"),
        custom(function = "validate_phone_number")
    )]
    pub phone: Option<String>,
    pub profile_photo: Option<String>,
    #[validate(custom(function = "is_empty"))]
    pub address: Option<String>,
    #[validate(
        custom(function = "is_empty"),
        custom(function = "validate_phone_number")
    )]
    pub emergency_phone: Option<String>,
    pub registered_by: Option<i32>,
}

#[derive(Serialize, Debug)]
pub struct PatientWithVisits {
    #[serde(flatten)]
    patient: Patient,
    visits: Vec<Visit>,
}

/// Check using name, nin and phone
impl Patient {
    /// Create a new patient
    pub async fn new(db_conn: &mut PgConnection, new_patient: NewPatient) -> QueryResult<Patient> {
        // First checking whether the patient exists before inserting another one
        diesel::insert_into(patients::table)
            .values(new_patient)
            .returning(Patient::as_returning())
            .get_result(db_conn)
    }

    /// Fetch all patients from database
    pub async fn select_all(db_conn: &mut PgConnection) -> QueryResult<Vec<Patient>> {
        patients::table.load(db_conn)
    }

    /// Fetch single patient by id
    pub async fn get_patient_by_id(db_conn: &mut PgConnection, patient_id: i32) -> QueryResult<Patient> {
        patients::table
            .filter(patients::dsl::patient_id.eq(patient_id))
            .get_result(db_conn)
    }

    /// Returns a collection of patients but paginated
    pub async fn patients_paginated(
        db_conn: &mut PgConnection,
        pagination: Pagination,
    ) -> QueryResult<Vec<Patient>> {
        patients::table
            .limit(pagination.items_per_page)
            .offset(pagination.offset())
            .load::<Patient>(db_conn)
    }

    /// Update a given patient and then return the updated record
    pub async fn update_by_id(
        db_conn: &mut PgConnection,
        patient_id: i32,
        new_patient: NewPatient,
    ) -> QueryResult<Patient> {
        diesel::update(patients::table.filter(patients::dsl::patient_id.eq(patient_id)))
            .set(new_patient)
            .returning(Patient::as_returning())
            .get_result(db_conn)
    }

    /// Delete a given patient and returning the deleted patient
    pub async fn delete_by_id(db_conn: &mut PgConnection, patient_id: i32) -> QueryResult<Patient> {
        diesel::delete(patients::table.filter(patients::dsl::patient_id.eq(patient_id)))
            .returning(Patient::as_returning())
            .get_result(db_conn)
    }

    /// Checks if a patient exists by using their name
    pub async fn check_patient_existence_by_name(
        db_conn: &mut PgConnection,
        patient_name: &'_ str,
    ) -> QueryResult<bool> {
        use crate::schema::patients::dsl::name;

        patients::table
            .filter(name.eq(patient_name))
            .select(Patient::as_select())
            .get_result(db_conn)
            .optional()
            .map(|patient| patient.is_some())
    }

    /// Search if user with given NIN number exists in database
    pub async fn check_patient_existence_by_nin(
        db_conn: &mut PgConnection,
        patient_nin: &'_ str,
    ) -> QueryResult<bool> {
        use crate::schema::patients::dsl::nin;

        patients::table
            .filter(nin.eq_any(&[patient_nin]))
            .select(Patient::as_select())
            .get_result(db_conn)
            .optional()
            .map(|patient| patient.is_some())
    }

    /// This function will return a collection of patients with their corresponding visits
    pub async fn patients_visits(
        db_conn: &mut PgConnection,
    ) -> QueryResult<Vec<PatientWithVisits>> {
        let all_patients = Self::select_all(db_conn).await?;

        let visits = Visit::belonging_to(&all_patients)
            .select(Visit::as_select())
            .load(db_conn)?;

        let visits_per_patient = visits
            .grouped_by(&all_patients)
            .into_iter()
            .zip(all_patients)
            .map(|(visits, patient)| PatientWithVisits { patient, visits })
            .collect::<Vec<PatientWithVisits>>();

        Ok(visits_per_patient)
    } 
}
