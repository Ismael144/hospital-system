use crate::schema::users;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use diesel_derive_enum;

/// Generic diesel result, where Error variant is error coming from diesel
type DieselResult<T> = Result<T, diesel::result::Error>;

/// These are the roles of different kinds of users
#[derive(diesel_derive_enum::DbEnum, Debug, Clone)]
#[ExistingTypePath = "crate::schema::sql_types::UserRole"]
pub enum UserRole {
    Admin,
    Doctor,
    Nurse,
    Receptionist,
    Pharmacist,
    Accountant,
}

/// This is the User model, will be used for user authentication, and user Identification
#[derive(Debug, Clone, Queryable, Identifiable, Selectable, QueryableByName)]
#[diesel(table_name = users, check_for_backend(diesel::pg::Pg))]
#[diesel(primary_key(user_id))]
pub struct User {
    pub user_id: i32,
    pub username: String,
    pub password_hash: String,
    /// User role depending on who is using the system
    pub role: UserRole,
    pub full_name: String,
    pub email: String,
    pub phone: Option<String>,
    pub is_active: Option<bool>,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}

/// This model will be used for inserting users
#[derive(Insertable, AsChangeset, Debug)]
#[diesel(table_name = users)]
pub struct NewUser<'a> {
    pub username: &'a str,
    pub email: &'a str,
    pub password_hash: &'a str,
    pub phone: Option<&'a str>,
    pub full_name: &'a str,
    pub is_active: Option<bool>,
}

/// User CRUD operations Implemenations
impl User {
    /// Insert new user into database
    /// Takes in a new user instance
    pub async fn new(connection: &mut PgConnection, new_user: NewUser<'_>) -> DieselResult<User> {
        diesel::insert_into(users::table)
            .values(new_user)
            .returning(User::as_returning())
            .get_result(connection)
    }

    /// This method will fetch all users from the database
    pub async fn select_all(
        connection: &mut PgConnection,
        new_user: NewUser<'_>,
    ) -> DieselResult<Vec<User>> {
        users::table.load(connection)
    }

    /// Getting single user by id
    pub async fn get_user_by_id(connection: &mut PgConnection, user_id: i32) -> DieselResult<User> {
        users::table
            .filter(users::dsl::user_id.eq(user_id))
            .get_result(connection)
    }

    /// Updating user by id, after it returns the updated user
    /// Trying to delete a user by id which does not exist would return an error
    pub async fn update_user_by_id(
        connection: &mut PgConnection,
        user_id: i32,
        update_user: NewUser<'_>,
    ) -> DieselResult<User> {
        diesel::update(users::table.filter(users::dsl::user_id.eq(user_id)))
            .set(update_user)
            .returning(User::as_returning())
            .get_result(connection)
    }

    /// Deleting the user, it returns the deleted user back
    pub async fn delete_user_by_id(
        connection: &mut PgConnection,
        user_id: i32,
    ) -> DieselResult<User> {
        diesel::delete(users::table.filter(users::dsl::user_id.eq(user_id)))
            .returning(User::as_returning())
            .get_result(connection)
    }
}
