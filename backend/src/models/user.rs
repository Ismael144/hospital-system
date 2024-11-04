use chrono::{DateTime, Utc};
// use bigdecimal::BigDecimal;
use diesel::prelude::*;
use diesel_derive_enum::DbEnum;
use crate::schema::users;

// git commit -m "first commit"

#[derive(Debug, Clone, Copy, PartialEq, Eq, DbEnum)]
#[DieselType = "User_role"]
pub enum UserRole {
    Admin,
    Doctor,
    Nurse,
    Receptionist,
    Pharmacist,
    Accountant,
}

#[derive(Debug, Clone, Queryable, Identifiable)]
#[diesel(table_name = users)]
#[diesel(primary_key(user_id))]
pub struct User {
    pub user_id: i32,
    pub username: String,
    pub password_hash: String,
    pub role: UserRole,
    pub full_name: String,
    pub email: String,
    pub phone: Option<String>,
    pub is_active: Option<bool>,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}
