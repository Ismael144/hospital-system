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
use std::env;

const JWT_SECRET: &[u8] = b"this-is-a-simple-jwt-secret";
const TOKEN_EXPIRATION_HOURS: i64 = 24;

// Claims struct for JWT implementation
#[derive(Serialize, Deserialize)]
pub struct Claims {
    pub sub: i32,
    pub exp: i64,
    pub role: UserRole,
    pub iat: i64,
}

// Login credentials
#[derive(Serialize, Deserialize)]
pub struct LoginCredentials {
    pub username: String,
    pub password: String,
}

// Token response
#[derive(Serialize, Deserialize)]
pub struct TokenResponse {
    token: String,
    token_type: String,
    expires_in: i64,
}

pub struct AuthService;

impl AuthService {
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
        let token_expiration_hours = env::var("TOKEN_EXPIRATION_HOURS").expect("Token expiration hours needed...").parse::<i64>().unwrap();

        let now = Utc::now();
        let exp = now + Duration::hours(token_expiration_hours);

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
            expires_in: token_expiration_hours * 3600,
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

    pub fn signup(
        db_conn: &mut PgConnection,
        new_user: NewUser,
    ) -> Result<String, ErrorArchive> {
        Ok(String::from("some string"))
    }
}
