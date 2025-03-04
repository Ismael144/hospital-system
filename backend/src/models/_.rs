// pub mod administered_medication;
// pub mod bed;
// pub mod bed_allocation;
// pub mod doctor_consultation;
// pub mod invoice;
// pub mod medication;
// pub mod patient;
// pub mod prescription;
// pub mod procedure;
// pub mod triage_record;
// pub mod user;
// pub mod visit;

// use diesel::PgConnection;
// use serde::{Deserialize, Serialize};
// use std::future::Future;
// use std::sync::{Mutex, Arc}; 

// /// A generic Diesel result where the `Err` variant comes from Diesel.
// pub type QueryResult<T> = Result<T, diesel::result::Error>;

// /// This trait will be used for conversions from one type to another type
// /// Picture a scenario where I have a table with foreign keys, but I want to return a
// /// representative of the data with all foreign keys replaced with the actual underlying data
// ///
// /// This example is in database perspective
// ///
// /// ## Example
// /// ```rust
// /// use diesel::PgConnection;
// /// use crate::models::HandlerResult;
// ///
// /// /// This is a model in some other module
// /// pub struct Owner<'a> {
// ///     name: &'a str
// /// }
// ///
// /// pub struct Vehicle {
// ///     name: &'a str,
// ///     owner_id: i32
// /// }
// ///
// /// pub struct VehicleWithOwner<'a> {
// ///     owner: Option<Owner<'a>>,
// ///     vehicle: Option<Vehicle<'a>>
// /// }
// ///
// /// impl
// ///
// /// impl Vehicle {
// ///     pub async fn select_all_vehicles(db_conn: &mut PgConnection) -> HandlerResult {
// ///         
// ///     }
// /// }
// ///
// /// ```
// trait TryIntoWithConn<T>: std::marker::Sized {
//     type Error;
//     type ResultsFuture;

//     fn try_into_with_conn(
//         db_conn: Arc<Mutex<PgConnection>>,
//         item: T,
//     ) -> Self::ResultsFuture
//     where
//         T: std::marker::Sized;
// }

// /// Marker trait for all models.
// /// You can later add common helper methods (e.g., save, update) here.
// pub trait Model {}

// /// Parameters for pagination.
// #[derive(Serialize, Deserialize, Clone, Debug)]
// pub struct Pagination {
//     pub page: i64,
//     pub items_per_page: i64,
// }

// impl Pagination {
//     /// Computes the offset used in the query.
//     pub fn offset(&self) -> i64 {
//         (self.page - 1) * self.items_per_page
//     }
// }

// /// Generic response for paginated data.
// #[derive(Serialize, Clone)]
// pub struct PaginationResponse<T>
// where
//     T: Serialize,
// {
//     pub data: T,
//     pub pagination: Pagination,
//     pub total_pages: i64,
// }

// impl<T> PaginationResponse<T>
// where
//     T: Serialize,
// {
//     /// Creates a new pagination response.
//     pub fn new(data: T, pagination: Pagination, row_count: i64) -> Self {
//         // Compute the total pages
//         let pages = (row_count as f64 / pagination.items_per_page as f64).ceil() as i64;
//         let total_pages = if pages < 1 { 1 } else { pages };

//         Self {
//             data,
//             pagination,
//             total_pages: total_pages as i64,
//         }
//     }
// }


// use super::{
//     doctor_consultation::DoctorConsultation, medication::Medication, Pagination, TryIntoWithConn,
// };
// use crate::impls::serde_impls::{option_uuid_serialize, uuid_serialize};
// use crate::schema::prescriptions;
// use chrono::{DateTime, Utc};
// use diesel::prelude::*;
// use futures::Future;
// use serde::{Deserialize, Serialize};
// use std::pin::Pin;
// use std::sync::{Arc, Mutex};
// use uuid::Uuid;
// use validator::Validate;

// #[derive(Debug, Clone, Queryable, Identifiable, Selectable, Serialize)]
// #[diesel(table_name = prescriptions)]
// #[diesel(primary_key(prescription_id))]
// pub struct Prescription {
//     #[serde(rename = "id", with = "uuid_serialize")]
//     pub prescription_id: Uuid,
//     #[serde(with = "option_uuid_serialize")]
//     pub consultation_id: Option<Uuid>,
//     #[serde(with = "option_uuid_serialize")]
//     pub medication_id: Option<Uuid>,
//     pub dosage: String,
//     pub frequency: String,
//     pub duration_days: i32,
//     pub notes: Option<String>,
//     pub created_at: Option<DateTime<Utc>>,
// }

// #[derive(Insertable, AsChangeset, Validate, Deserialize)]
// #[diesel(table_name = prescriptions)]
// pub struct NewPrescription {
//     #[serde(with = "option_uuid_serialize")]
//     pub consultation_id: Option<Uuid>,
//     #[serde(with = "option_uuid_serialize")]
//     pub medication_id: Option<Uuid>,
//     pub dosage: String,
//     pub frequency: String,
//     pub duration_days: i32,
//     pub notes: Option<String>,
// }

// /// A model that brings full consultation and medication data depending on the medication_id and consulation_id foreign keys
// #[derive(Serialize)]
// pub struct PrescriptionWithConsultationAndMedication {
//     consultation: Option<DoctorConsultation>,
//     medication: Option<Medication>,
//     prescription: Prescription,
// }

// /// Conversion of Prescription to PrescriptionWithConsultationAndMedication
// impl TryIntoWithConn<Prescription> for PrescriptionWithConsultationAndMedication {
//     type Error = diesel::result::Error;
//     type ResultsFuture = Pin<Box<dyn Future<Output = QueryResult<Self>> + 'static>>;

//     /// Implement try_into_with_conn, I'll use it to convert a type of Prescription to a type of PrescriptionWithConsultationAndMedication
//     fn try_into_with_conn(
//         db_conn: Arc<Mutex<PgConnection>>,
//         item: Prescription,
//     ) -> Self::ResultsFuture {
//         let db_conn_clone = db_conn.clone();

//         Box::pin(async move {
//             let mut db_connectivity = db_conn_clone.lock().unwrap();

//             Ok(Self {
//                 consultation: DoctorConsultation::get_by_id(
//                     &mut db_connectivity,
//                     item.consultation_id.clone().unwrap(),
//                 )
//                 .await?,
//                 medication: Medication::get_medication_by_id(
//                     &mut db_connectivity,
//                     item.medication_id.clone().unwrap(),
//                 )
//                 .await?,
//                 prescription: item,
//             })
//         })
//     }
// }

// /// Conversion of a vec of prescriptions into a vec of PrescriptionWithConsultationAndMedication
// impl TryIntoWithConn<Vec<Prescription>> for Vec<PrescriptionWithConsultationAndMedication> {
//     type Error = diesel::result::Error;
//     type ResultsFuture = Pin<Box<dyn Future<Output = QueryResult<Self>> + 'static>>;

//     fn try_into_with_conn(
//         db_conn: Arc<Mutex<PgConnection>>,
//         prescriptions_data: Vec<Prescription>,
//     ) -> Self::ResultsFuture {
//         let db_conn_clone = db_conn.clone();

//         Box::pin(async move {
//             // Database connection
//             let mut db_connectivity = db_conn_clone.lock().unwrap();
//             let mut results = Vec::with_capacity(prescriptions_data.len());

//             // Process each prescription at a time
//             for prescription in prescriptions_data {
//                 // Awaiting each async conversion and push the result into results vec
//                 let converted = <PrescriptionWithConsultationAndMedication as TryIntoWithConn<
//                     Prescription,
//                 >>::try_into_with_conn(
//                     db_conn.clone(), prescription
//                 )
//                 .await?;

//                 results.push(converted);
//             }

//             Ok(results)
//         })
//     }
// }

// impl Prescription {
//     /// Create a new prescription
//     pub async fn new(
//         db_conn: &mut PgConnection,
//         new_prescription: NewPrescription,
//     ) -> QueryResult<Self> {
//         diesel::insert_into(prescriptions::table)
//             .values(new_prescription)
//             .returning(Prescription::as_returning())
//             .get_result::<Self>(db_conn)
//     }

//     /// Returns row count of the prescriptions table
//     pub async fn row_count(db_conn: &mut PgConnection) -> QueryResult<i64> {
//         prescriptions::table.count().get_result::<i64>(db_conn)
//     }

//     /// Return paginated prescription data
//     pub async fn paginate_prescription(
//         db_conn: Arc<Mutex<PgConnection>>,
//         pagination: Pagination,
//     ) -> QueryResult<Vec<PrescriptionWithConsultationAndMedication>> {
//         let mut db_conn_clone = &mut db_conn.clone().lock().unwrap();

//         // Load prescriptions synchronously.
//         let prescriptions_data = prescriptions::table
//             .limit(pagination.items_per_page)
//             .offset(pagination.offset())
//             .load::<Self>(&mut db_conn_clone)?;

//         // Conversion of a vec of Prescription to a vec of PrescriptionWithConsultationAndMedication.
//         <Vec<PrescriptionWithConsultationAndMedication> as TryIntoWithConn<Vec<Self>>>::try_into_with_conn(db_conn, prescriptions_data).await
//     }

//     /// Retrieve a prescription by prescription uuid, will return none if prescription is not found
//     pub async fn get_by_id(
//         db_conn: Arc<Mutex<PgConnection>>,
//         prescription_id: Uuid,
//     ) -> QueryResult<Option<PrescriptionWithConsultationAndMedication>> {
//         let mut db_conn_clone = db_conn.clone().lock().unwrap()

//         // Retrieve a single prescription by uuid
//         let single_prescription = prescriptions::table
//             .filter(prescriptions::dsl::prescription_id.eq(prescription_id))
//             .get_result::<Self>(&mut db_conn_clone)
//             .optional()
//             .expect("Failed to retrieve item from database");

//         // Convert our Prescription to PrescriptionWithConsultationAndMedication
//         match single_prescription {
//             Some(prescription) => <PrescriptionWithConsultationAndMedication as TryIntoWithConn<
//                 Self,
//             >>::try_into_with_conn(db_conn, prescription)
//             .await
//             .map(Some),
//             None => Ok(None),
//         }
//     }
// }
