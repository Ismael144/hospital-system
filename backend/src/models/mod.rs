pub mod bed;
pub mod bed_allocation;
pub mod patient;
pub mod procedure;
pub mod triage_record;
pub mod user;
pub mod visit;
pub mod prescription; 
pub mod medication; 
pub mod invoice; 
pub mod doctor_consultation; 
pub mod administered_medication; 

/// Generic diesel result, where Error variant is error coming from diesel
pub type QueryResult<T> = Result<T, diesel::result::Error>;

/// The Pagination struct: Will be used to pagination for data
pub struct Pagination {
    pub page: i64, 
    pub items_per_page: i64
}

impl Pagination {
    pub fn offset(&self) -> i64 {
        (self.page - 1) * self.items_per_page
    }
}