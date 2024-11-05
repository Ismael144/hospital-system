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

    HttpServer::new(|| {
        // CORS(Cross Origin Resource Sharing) Configuration
        let cors = Cors::default()
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![
                http::header::CONTENT_TYPE,
                http::header::AUTHORIZATION,
            ])
            .max_age(3600);

        App::new().wrap(TracingLogger::default()).wrap(cors)
        // .service()
    })
    .bind("0.0.0.0:8000")?
    .run()
    .await
}
