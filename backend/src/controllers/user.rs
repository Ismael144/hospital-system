use super::{new_model_validate, ValidationControllerResult, Controller};
use crate::models::user::{NewUser, User};
use diesel::PgConnection;
use std::collections::HashMap;

pub struct UserController;

impl Controller for UserController {}

impl UserController {
    /// Handles field and database validations for creating a new user
    pub async fn create_user(
        db_conn: &mut PgConnection,
        new_user: NewUser,
    ) -> ValidationControllerResult<User> {
        return match new_model_validate(&new_user) {
            Ok(_) => {
                // Initialize error_hashmap for backend database errors
                let mut error_hashmap: HashMap<String, String> = HashMap::new();

                // Before creating new user, I'll first do some validation here
                // Validation for duplicate username
                if User::username_exists(db_conn, &new_user.username)
                    .await
                    .unwrap()
                {
                    error_hashmap.insert(
                        "username".to_string(),
                        format!(
                            "Username '{}' is not available, please consider using another!",
                            new_user.username.clone()
                        ),
                    );
                }

                // Validation for duplicate email address
                if User::email_exists(db_conn, &new_user.email).await.unwrap() {
                    error_hashmap.insert(
                        "email".to_string(),
                        format!(
                            "Email address '{}' is not available, please consider using another!",
                            new_user.email
                        ),
                    );
                }

                // Validation for duplicate full_name
                if User::full_name_exists(db_conn, &new_user.full_name.clone())
                    .await
                    .unwrap()
                {
                    error_hashmap.insert(
                        "username".to_string(),
                        format!("Full name '{}' is already registered", new_user.full_name),
                    );
                }

                if error_hashmap.len() == 0 {
                    let created_user = User::create_user(db_conn, new_user).await.unwrap();

                    Ok(created_user)
                } else {
                    Err(error_hashmap)
                }
            }
            Err(signup_errors) => Err(signup_errors),
        };
    }
}
