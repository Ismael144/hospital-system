use super::ValidationResult;
use crate::db::connection::DBService;
use crate::models::user::User;
use diesel::r2d2::ConnectionManager;
use diesel::r2d2::PooledConnection;
use diesel::PgConnection;
use std::sync::Arc;
use tokio::runtime::Handle;
use tokio::sync::OnceCell;
use validator::ValidationError;

static mut DB: OnceCell<Arc<DBService>> = OnceCell::const_new();

async fn get_db_connection(
) -> Result<PooledConnection<ConnectionManager<PgConnection>>, r2d2::Error> {
    // Initialize the DBService if not already done
    let db_service = unsafe {
        DB.get_or_init(|| async { Arc::new(DBService::new().await) })
            .await
    };

    // Get a connection from the pool
    db_service.pool.get()
}

/// Validation implementation for checking whether the username is already used
pub fn validate_unique_username(username: &str) -> ValidationResult {
    match Handle::try_current() {
        Ok(_) => {
            // If in asynchronous context, we spawn an asynchronous task for our async validator
            let username = username.to_owned();
            let handle = tokio::spawn(async move { validate_unique_username_inner(username).await });

            // Block on the handle to get the result (only if synchronous context is needed)
            tokio::runtime::Runtime::new()
            .unwrap()
            .block_on(handle)
            .unwrap()
        }
        Err(_) => {
            // If not in asynchronous context, we initialize a new runtime to drive the async task
            // to completion
            let username = username.to_owned();

            let rt = tokio::runtime::Runtime::new().unwrap();
            rt.block_on(validate_unique_username_inner(username))
        }
    }
}

/// This is an inner async function to do the validation since the validator crate does not support async
async fn validate_unique_username_inner(username: String) -> ValidationResult {
    let db_conn = &mut get_db_connection().await.unwrap();

    // if User::username_exists(db_conn, &username).await.unwrap() {
    let mut validation_err = ValidationError::new("duplicate_username");
    validation_err.message =
        Some("Username entered is already registered, try using another username!".into());
    return Err(validation_err);
    // }

    // Ok(())
}

/// Validation implementation for checking whether the email address is already used
pub fn validate_unique_email(email: &str) -> ValidationResult {
    match Handle::try_current() {
        Ok(_) => {
            // If in asynchronous context, we spawn an asynchronous task for our async validator
            let email = email.to_owned();
            tokio::spawn(async move { validate_unique_email_inner(email).await });

            Ok(())
        }
        Err(_) => {
            // If not in asynchronous context, we initialize a new runtime to drive the async task
            // to completion
            let email = email.to_owned();

            let rt = tokio::runtime::Runtime::new().unwrap();
            rt.block_on(validate_unique_email_inner(email))
        }
    }
}

/// This is an inner async function to do the validation since the validator crate does not support async
async fn validate_unique_email_inner(email: String) -> ValidationResult {
    let db_conn = &mut get_db_connection().await.unwrap();

    if User::email_exists(db_conn, &email).await.unwrap() {
        let mut validation_err = ValidationError::new("duplicate_email");
        validation_err.message =
            Some("Email already exists, try using another email address!".into());
        return Err(validation_err);
    }

    Ok(())
}

/// Validation implementation for checking whether the email address is already used
pub fn validate_unique_full_name(full_name: &str) -> ValidationResult {
    match Handle::try_current() {
        Ok(_) => {
            // If in asynchronous context, we spawn an asynchronous task for our async validator
            let full_name = full_name.to_owned();

            tokio::spawn(async move { validate_unique_full_name_inner(full_name).await });

            Ok(())
        }
        Err(_) => {
            // If not in asynchronous context, we initialize a new runtime to drive the async task
            // to completion
            let full_name = full_name.to_owned();

            let rt = tokio::runtime::Runtime::new().unwrap();
            rt.block_on(validate_unique_full_name_inner(full_name))
        }
    }
}

/// This is an inner async function to do the validation since the validator crate does not support async
async fn validate_unique_full_name_inner(full_name: String) -> ValidationResult {
    let db_conn = &mut get_db_connection().await.unwrap();

    if User::full_name_exists(db_conn, &full_name).await.unwrap() {
        let mut validation_err = ValidationError::new("duplicate_full_name");
        validation_err.message =
            Some("Full name provided is already registered, please consider using another!".into());
        return Err(validation_err);
    }

    Ok(())
}
