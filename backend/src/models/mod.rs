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

use serde::{Deserialize, Serialize};

/// A generic Diesel result where the `Err` variant comes from Diesel.
pub type QueryResult<T> = Result<T, diesel::result::Error>;

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
