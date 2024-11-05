mod user; 
mod bed;

/// Generic diesel result, where Error variant is error coming from diesel
type DieselResult<T> = Result<T, diesel::result::Error>;
