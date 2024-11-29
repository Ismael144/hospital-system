pub mod users; 
pub mod patients;

use std::collections::HashMap; 

type ControllerResult<T> = Result<T, HashMap<String, String>>; 

