use crate::models::user::{NewUser, User};
use diesel::PgConnection;
use std::collections::HashMap; 
use validator::Validate;

pub struct UserController;

impl UserController {
    pub async fn create_user(db_conn: &mut PgConnection, new_user: NewUser) {
        pub async fn signup(
            db_conn: &mut PgConnection,
            new_user: NewUser,
        ) -> Result<User, HashMap<String, String>> {
            let mut error_hashmap: HashMap<String, String> = HashMap::new();

            return match new_user.validate() {
                Ok(_) => {
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
                                new_user.username
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
                    if User::full_name_exists(db_conn, &new_user.full_name)
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
                Err(signup_errors) => {
                    for (field, errors) in signup_errors.field_errors() {
                        println!("{:?}, {:?}", field, errors);
                        if let Some(error_message) = errors.first().and_then(|e| e.message.clone())
                        {
                            error_hashmap.insert(field.to_string(), error_message.to_string());
                        }
                    }

                    Err(error_hashmap)
                }
            };
        }
    }
}
