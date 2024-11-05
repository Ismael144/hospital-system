mod bed;
mod bed_allocation;
mod patient;
mod procedure;
mod triage_record;
mod user;
mod visit;
mod prescription; 
mod medication; 
mod invoice; 
mod doctor_consultation; 
mod administered_medication; 

/// Generic diesel result, where Error variant is error coming from diesel
type DieselResult<T> = Result<T, diesel::result::Error>;
