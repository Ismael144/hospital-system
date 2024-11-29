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

/// Generic diesel result, where Error variant is error coming from diesel
pub type QueryResult<T> = Result<T, diesel::result::Error>;

/// This trait will be implemented by every model
pub trait Model {}

/// The Pagination struct: Will be used to pagination for data
#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Pagination {
    pub page: i64,
    pub items_per_page: i64,
}

impl Pagination {
    pub fn offset(&self) -> i64 {
        (self.page - 1) * self.items_per_page
    }
}

/// Pagination Response, to be used in handlers
#[derive(Serialize, Clone)]
pub struct PaginationResponse<T>
where
    T: Model,
{
    pub data: T,
    pub pagination: Pagination,
    pub items_on_page_count: usize,
}

impl<T> PaginationResponse<T>
where
    T: Model,
{
    pub fn new(data: T, pagination: Pagination, items_on_page_count: usize) -> Self {
        Self {
            data,
            pagination,
            items_on_page_count,
        }
    }
}
