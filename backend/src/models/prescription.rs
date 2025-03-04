use super::{
    doctor_consultation::DoctorConsultation, medication::Medication, Pagination, TryIntoWithConn,
};
use crate::impls::serde_impls::{option_uuid_serialize, uuid_serialize};
use crate::schema::prescriptions;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use validator::Validate;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
#[diesel(table_name = prescriptions)]
#[diesel(primary_key(prescription_id))]
pub struct Prescription {
    #[serde(rename = "id", with = "uuid_serialize")]
    pub prescription_id: Uuid,
    #[serde(with = "option_uuid_serialize")]
    pub consultation_id: Option<Uuid>,
    #[serde(with = "option_uuid_serialize")]
    pub medication_id: Option<Uuid>,
    pub dosage: String,
    pub frequency: String,
    pub duration_days: i32,
    pub notes: Option<String>,
    pub created_at: Option<DateTime<Utc>>,
}

#[derive(Insertable, AsChangeset, Validate, Deserialize)]
#[diesel(table_name = prescriptions)]
pub struct NewPrescription {
    #[serde(with = "option_uuid_serialize")]
    pub consultation_id: Option<Uuid>,
    #[serde(with = "option_uuid_serialize")]
    pub medication_id: Option<Uuid>,
    pub dosage: String,
    pub frequency: String,
    pub duration_days: i32,
    pub notes: Option<String>,
}

/// A model that brings full consultation and medication data depending on the medication_id and consulation_id foreign keys
#[derive(Serialize)]
pub struct PrescriptionWithConsultationAndMedication {
    consultation: Option<DoctorConsultation>,
    medication: Option<Medication>,
    prescription: Prescription,
}

/// Conversion of Prescription to PrescriptionWithConsultationAndMedication
impl TryIntoWithConn<Prescription> for PrescriptionWithConsultationAndMedication {
    type Error = diesel::result::Error;

    /// Implement try_into_with_conn, I'll use it to convert a type of Prescription to a type of PrescriptionWithConsultationAndMedication
    async fn try_into_with_conn(
        db_conn: &mut PgConnection,
        item: Prescription,
    ) -> QueryResult<Self> {
        Ok(Self {
            consultation: DoctorConsultation::get_by_id(
                db_conn,
                item.consultation_id.clone().unwrap(),
            )
            .await?,
            medication: Medication::get_medication_by_id(
                db_conn,
                item.medication_id.clone().unwrap(),
            )
            .await?,
            prescription: item,
        })
    }
}

/// Conversion of a vec of prescriptions into a vec of PrescriptionWithConsultationAndMedication
impl TryIntoWithConn<Vec<Prescription>> for Vec<PrescriptionWithConsultationAndMedication> {
    type Error = diesel::result::Error;

    async fn try_into_with_conn(
        db_conn: &mut PgConnection,
        prescriptions_data: Vec<Prescription>,
    ) -> Result<Self, Self::Error> {
        let mut results = Vec::with_capacity(prescriptions_data.len());

        // Process each prescription at a time
        for prescription in prescriptions_data {
            // Awaiting each async conversion and push the result into results vec
            let converted = <PrescriptionWithConsultationAndMedication as TryIntoWithConn<
                Prescription,
            >>::try_into_with_conn(db_conn, prescription)
            .await?;

            results.push(converted);
        }

        Ok(results)
    }
}

impl Prescription {
    /// Create a new prescription
    pub async fn new(
        db_conn: &mut PgConnection,
        new_prescription: NewPrescription,
    ) -> QueryResult<Self> {
        diesel::insert_into(prescriptions::table)
            .values(new_prescription)
            .returning(Prescription::as_returning())
            .get_result::<Self>(db_conn)
    }

    /// Returns row count of the prescriptions table
    pub async fn row_count(
        db_conn: &mut PgConnection
    ) -> QueryResult<i64> {
        prescriptions::table.count().get_result::<i64>(db_conn)
    }

    /// Return paginated prescription data
    pub async fn paginate_prescription(
        db_conn: &mut PgConnection,
        pagination: Pagination,
    ) -> QueryResult<Vec<PrescriptionWithConsultationAndMedication>> {
        // Load prescriptions synchronously.
        let prescriptions_data = prescriptions::table
            .limit(pagination.items_per_page)
            .offset(pagination.offset())
            .load::<Self>(db_conn)?;

        // Conversion of a vec of Prescription to a vec of PrescriptionWithConsultationAndMedication.
        <Vec<PrescriptionWithConsultationAndMedication> as TryIntoWithConn<Vec<Self>>>::try_into_with_conn(db_conn, prescriptions_data).await
    }

    /// Retrieve a prescription by prescription uuid, will return none if prescription is not found 
    pub async fn get_by_id(
        db_conn: &mut PgConnection,
        prescription_id: Uuid,
    ) -> QueryResult<Option<PrescriptionWithConsultationAndMedication>> {
        // Retrieve a single prescription by uuid
        let single_prescription = prescriptions::table
            .filter(prescriptions::dsl::prescription_id.eq(prescription_id))
            .get_result::<Self>(db_conn)
            .optional().expect("Failed to retrieve item from database");

        // Convert our Prescription to PrescriptionWithConsultationAndMedication
        match single_prescription {
        Some(prescription) => Ok(Some(<PrescriptionWithConsultationAndMedication as TryIntoWithConn<Self>>::try_into_with_conn(db_conn, prescription).await?)), 
            None => Ok(None)
        }
    }
}
