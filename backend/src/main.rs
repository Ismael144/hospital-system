mod config;
mod db;
mod error_archive;
mod extractors;
mod handlers;
mod impls;
mod models;
mod schema;

use actix_web::{web, App, HttpServer};
use tracing_actix_web::TracingLogger;

#[tokio::main]
async fn main() -> std::io::Result<()> {
    // Initialize tracing
    config::init_tracing();

    // Initialize Database
    let db = db::connection::DBService::new().await;
    let db_service_app_data = web::Data::new(db);

    HttpServer::new(move || {
        let cors = config::configure_cors();

        App::new()
            .app_data(db_service_app_data.clone())
            .wrap(TracingLogger::default())
            .wrap(cors)
        // .service()
    })
    .bind("0.0.0.0:8000")?
    .run()
    .await
}
