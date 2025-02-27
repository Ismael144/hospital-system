use crate::error_archive::ErrorArchive;
use crate::models::user::NewUser;
use crate::models::user::{User, UserRole};
use argon2::{
    password_hash::{rand_core::OsRng, PasswordHash, PasswordHasher, PasswordVerifier, SaltString},
    Argon2,
};
use chrono::{Duration, Utc};
use diesel::prelude::PgConnection;
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, TokenData, Validation};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::env;
use validator::Validate;

const TOKEN_EXPIRATION_HOURS: i64 = 1;

/// Claims struct for JWT implementation
#[derive(Serialize, Deserialize)]
pub struct Claims {
    pub sub: i32,
    pub exp: i64,
    pub role: UserRole,
    pub iat: i64,
}

/// Login credentials
#[derive(Serialize, Deserialize)]
pub struct LoginCredentials {
    pub email: String,
    pub password: String,
}

/// Token response
#[derive(Serialize, Deserialize)]
pub struct TokenResponse {
    token: String,
    token_type: String,
    expires_in: i64,
}

pub struct AuthService;

impl AuthService {
    /// Hash password inorder to be stored securely in the database
    pub fn hash_password(password: &str) -> Result<String, ErrorArchive> {
        let salt = SaltString::generate(&mut OsRng);
        let argon2 = Argon2::default();

        argon2
            .hash_password(password.as_bytes(), &salt)
            .map(|hash| hash.to_string())
            .map_err(|_| ErrorArchive::InternalServerError)
    }

    pub fn verify_password(password: &str, hash: &str) -> Result<bool, ErrorArchive> {
        let parsed_hash = PasswordHash::new(hash).map_err(|_| ErrorArchive::InternalServerError)?;

        Ok(Argon2::default()
            .verify_password(password.as_bytes(), &parsed_hash)
            .is_ok())
    }

    /// Generate token for authenticated user
    pub fn generate_token(user: &User) -> Result<TokenResponse, ErrorArchive> {
        dotenvy::dotenv().ok();

        let jwt_secret = env::var("JWT_SECRET").expect("A JWT Secret is expected...");

        let now = Utc::now();
        let exp = now + Duration::hours(TOKEN_EXPIRATION_HOURS);

        let claims = Claims {
            sub: user.user_id,
            role: user.role.clone(),
            exp: exp.timestamp(),
            iat: now.timestamp(),
        };

        let token = encode(
            &Header::default(),
            &claims,
            &EncodingKey::from_secret(jwt_secret.as_bytes()),
        )
        .map_err(|_| ErrorArchive::InternalServerError)?;

        Ok(TokenResponse {
            token,
            token_type: "Bearer".to_string(),
            expires_in: TOKEN_EXPIRATION_HOURS * 3600,
        })
    }

    /// Checking whether the token hasn't expired.
    pub fn validate_token(token: &str) -> Result<TokenData<Claims>, ErrorArchive> {
        dotenvy::dotenv().ok();

        let jwt_secret = env::var("JWT_SECRET").expect("A JWT Secret is expected...");

        decode::<Claims>(
            token,
            &DecodingKey::from_secret(jwt_secret.as_bytes()),
            &Validation::default(),
        )
        .map_err(|_| ErrorArchive::InternalServerError)
    }

    pub async fn get_auth_user(
        db_conn: &mut PgConnection,
        token: &str,
    ) -> Result<User, ErrorArchive> {
        // First check whether token is valid
        match Self::validate_token(token) {
            Ok(token_data) => {
                // Fetch user by id
                let user_id = token_data.claims.sub;
                let user = User::get_user_by_id(db_conn, user_id)
                    .await
                    .map_err(|_| ErrorArchive::InternalServerError)?;

                Ok(user)
            }
            Err(e) => Err(ErrorArchive::Unauthorized(e.to_string())),
        }
    }

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
                    if let Some(error_message) = errors.first().and_then(|e| e.message.clone()) {
                        error_hashmap.insert(field.to_string(), error_message.to_string());
                    }
                }

                Err(error_hashmap)
            }
        };
    }
}
