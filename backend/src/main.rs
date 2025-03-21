pub mod auth;
pub mod config;
pub mod controllers;
pub mod db;
pub mod error_archive;
pub mod extractors;
pub mod field_validations;
pub mod handlers;
pub mod impls;
pub mod models;
pub mod schema;

use actix_web::{web, App, HttpServer};
use tracing::info;
use tracing_actix_web::TracingLogger;

#[tokio::main]
async fn main() -> std::io::Result<()> {
    // Initialize tracing
    config::init_tracing();

    info!("Starting application");

    // Initialize Database
    let db = db::connection::DBService::new().await;
    let db_service_app_data = web::Data::new(db);

    info!("Database connection established");

    HttpServer::new(move || {
        info!("Configuring new worker");

        App::new()
            .app_data(db_service_app_data.clone())
            .wrap(config::configure_cors())
            .wrap(TracingLogger::default())
            .configure(handlers::base_handler_service_config)
    })
    .bind("0.0.0.0:8000")?
    .run()
    .await
}
