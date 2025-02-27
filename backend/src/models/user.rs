use super::Model;
use super::{Pagination, QueryResult};
use crate::auth::auth::AuthService;
use crate::error_archive::ErrorArchive;
use crate::field_validations::validate_phone_number;
use crate::schema::users;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use diesel_derive_enum;
use serde::{Deserialize, Serialize};
use validator::Validate;

/// These are the roles of different kinds of users
#[derive(diesel_derive_enum::DbEnum, Debug, Clone, Serialize, Deserialize, Eq, PartialEq)]
#[ExistingTypePath = "crate::schema::sql_types::UserRole"]
pub enum UserRole {
    Admin,
    Accountant,
    Doctor,
    Nurse,
    Receptionist,
    Pharmacist,
}

impl Model for User {}

impl Model for Vec<User> {}

/// This is the User model, will be used for user authentication, and user Identification
#[derive(Debug, Clone, Queryable, Identifiable, Selectable, QueryableByName, Serialize)]
#[diesel(table_name = users, check_for_backend(diesel::pg::Pg))]
#[diesel(primary_key(user_id))]
pub struct User {
    #[serde(rename = "id")]
    pub user_id: i32,
    pub username: String,
    pub password_hash: String,
    /// User role depending on who is using the system
    pub role: UserRole,
    pub full_name: String,
    pub email: String,
    pub phone: Option<String>,
    pub avatar: Option<String>,
    pub is_active: Option<bool>,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}

/// This struct will be used for inserting users
#[derive(Insertable, AsChangeset, Debug, Serialize, Deserialize, Validate, Clone)]
#[diesel(table_name = users)]
pub struct NewUser {
    #[validate(length(min = 4, message = "Username should be atleast 4 characters"))]
    pub username: String,
    #[validate(email(message = "Please provide a valid email address"))]
    pub email: String,
    pub role: UserRole,
    pub password_hash: String,
    #[validate(custom(function = "validate_phone_number"))]
    pub phone: Option<String>,
    pub avatar: Option<String>,
    #[validate(length(min = 5, message = "Full name should be atleast 5 characters"))]
    pub full_name: String,
}

/// User CRUD operations Implemenations
impl User {
    /// Insert new user into database
    /// Takes in a new user instance
    pub async fn new(connection: &mut PgConnection, new_user: NewUser) -> QueryResult<User> {
        diesel::insert_into(users::table)
            .values(new_user)
            .returning(User::as_returning())
            .get_result(connection)
    }

    /// This method will fetch all users from the database
    pub async fn select_all(connection: &mut PgConnection) -> QueryResult<Vec<User>> {
        users::table.load(connection)
    }

    /// The paginated data for users model, it takes in the Pagination struct
    pub async fn select_paginated(
        connection: &mut PgConnection,
        pagination: Pagination,
    ) -> QueryResult<Vec<User>> {
        users::table
            .limit(pagination.items_per_page)
            .offset(pagination.offset())
            .load::<User>(connection)
    }

    /// Getting single user by id
    pub async fn get_user_by_id(connection: &mut PgConnection, user_id: i32) -> QueryResult<User> {
        users::table
            .filter(users::dsl::user_id.eq(user_id))
            .get_result(connection)
    }

    /// Updating user by id, after it returns the updated user
    /// Trying to delete a user by id which does not exist would return an error
    pub async fn update_user_by_id(
        connection: &mut PgConnection,
        user_id: i32,
        update_user: NewUser,
    ) -> QueryResult<User> {
        diesel::update(users::table.filter(users::dsl::user_id.eq(user_id)))
            .set(update_user)
            .returning(User::as_returning())
            .get_result(connection)
    }

    /// Deleting the user, it returns the deleted user back
    pub async fn delete_by_id(connection: &mut PgConnection, user_id: i32) -> QueryResult<User> {
        diesel::delete(users::table.filter(users::dsl::user_id.eq(user_id)))
            .returning(User::as_returning())
            .get_result(connection)
    }

    /// Creates user into the database
    pub async fn create_user(db_conn: &mut PgConnection, new_user: NewUser) -> QueryResult<User> {
        // We'll first validate the user
        let mut new_user = new_user.clone();

        // Hashing the password first
        new_user.password_hash = AuthService::hash_password(&new_user.password_hash)
            .map_err(|_| ErrorArchive::InternalServerError)
            .unwrap();

        let created_user = diesel::insert_into(users::table)
            .values(new_user)
            .returning(User::as_returning())
            .get_result::<User>(db_conn);

        created_user
    }

    /// Checking whether a given username exists in the database
    pub async fn username_exists(
        db_conn: &mut PgConnection,
        username: &'_ str,
    ) -> QueryResult<bool> {
        // Checking whether a given username already exists in the database by returning its occurence count
        let username_count = users::table
            .filter(crate::schema::users::dsl::username.eq(username))
            .count()
            .get_result::<i64>(db_conn)?;

        if username_count < 1i64 {
            Ok(false)
        } else {
            Ok(true)
        }
    }

    /// Check whether a given email exists in the database
    pub async fn email_exists(db_conn: &mut PgConnection, email: &'_ str) -> QueryResult<bool> {
        // Checking whether a given email already exists in the database by returning its occurence count
        let email_count = users::table
            .filter(crate::schema::users::dsl::email.eq(email))
            .count()
            .get_result::<i64>(db_conn)?;

        if email_count < 1i64 {
            Ok(false)
        } else {
            Ok(true)
        }
    }

    /// Check whether a given full name exists in the database
    pub async fn full_name_exists(
        db_conn: &mut PgConnection,
        full_name: &'_ str,
    ) -> QueryResult<bool> {
        // Checking whether a given email already exists in the database by returning its occurence count
        let full_name_count = users::table
            .filter(crate::schema::users::dsl::full_name.eq(full_name))
            .count()
            .get_result::<i64>(db_conn)?;

        if full_name_count < 1i64 {
            Ok(false)
        } else {
            Ok(true)
        }
    }
}
