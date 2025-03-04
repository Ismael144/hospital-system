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


pub mod administered_medication;
pub mod bed;
pub mod bed_allocation;
pub mod doctor_consultation;
pub mod invoice;
pub mod medication;
pub mod patient;
pub mod prescription;
pub mod procedure;
pub mod triage_record;
pub mod user;
pub mod visit;

use diesel::PgConnection;
use serde::{Deserialize, Serialize};
use std::future::Future;

/// A generic Diesel result where the `Err` variant comes from Diesel.
pub type QueryResult<T> = Result<T, diesel::result::Error>;

/// This trait will be used for conversions from one type to another type
/// Picture a scenario where I have a table with foreign keys, but I want to return a
/// representative of the data with all foreign keys replaced with the actual underlying data
///
/// This example is in database perspective
///
/// Example
/// ```rust
/// use diesel::PgConnection;
/// use crate::models::HandlerResult;
///
/// /// This is a model in some other module
/// pub struct Owner<'a> {
///     name: &'a str
/// }
///
/// pub struct Vehicle {
///     name: &'a str,
///     owner_id: i32
/// }
///
/// pub struct VehicleWithOwner<'a> {
///     owner: Option<Owner<'a>>,
///     vehicle: Option<Vehicle<'a>>
/// }
///
/// impl Vehicle {
///     pub async fn select_all_vehicles(db_conn: &mut PgConnection) -> HandlerResult {
///         
///     }
/// }
///
/// ```
trait TryIntoWithConn<T>: std::marker::Sized {
    type Error;

    fn try_into_with_conn(
        db_conn: &mut PgConnection,
        item: T,
    ) -> impl Future<Output = Result<Self, Self::Error>>
    where
        T: std::marker::Sized;
}

/// Marker trait for all models.
/// You can later add common helper methods (e.g., save, update) here.
pub trait Model {}

/// Parameters for pagination.
#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Pagination {
    pub page: i64,
    pub items_per_page: i64,
}

impl Pagination {
    /// Computes the offset used in the query.
    pub fn offset(&self) -> i64 {
        (self.page - 1) * self.items_per_page
    }
}

/// Generic response for paginated data.
#[derive(Serialize, Clone)]
pub struct PaginationResponse<T>
where
    T: Serialize,
{
    pub data: T,
    pub pagination: Pagination,
    pub total_pages: i64,
}

impl<T> PaginationResponse<T>
where
    T: Serialize,
{
    /// Creates a new pagination response.
    pub fn new(data: T, pagination: Pagination, row_count: i64) -> Self {
        // Compute the total pages
        let pages = (row_count as f64 / pagination.items_per_page as f64).ceil() as i64;
        let total_pages = if pages < 1 { 1 } else { pages };

        Self {
            data,
            pagination,
            total_pages: total_pages as i64,
        }
    }
}
