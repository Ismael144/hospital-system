mod config;
mod db;
mod models;
mod schema;
mod serde_impls;

use actix_cors::Cors;
use actix_web::{http, web, App, HttpServer};
use tracing_actix_web::TracingLogger;

#[tokio::main]
async fn main() -> std::io::Result<()> {
    // Initialize tracing
    config::init_tracing();

    let cors = config::configure_cors();

    HttpServer::new(|| {
        App::new().wrap(TracingLogger::default()).wrap(cors)
        // .service()
    })
    .bind("0.0.0.0:8000")?
    .run()
    .await
}
