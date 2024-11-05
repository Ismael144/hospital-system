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
type DieselResult<T> = Result<T, diesel::result::Error>;
