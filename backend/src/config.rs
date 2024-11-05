use actix_cors::Cors;
use actix_web::http;
use tracing_actix_web::TracingLogger;
use tracing_subscriber::EnvFilter;

/// Configuration of tracing for logging
pub fn init_tracing() {
    tracing_subscriber::fmt()
        .with_env_filter(EnvFilter::from_default_env())
        .init()
}

/// CORS(Cross Origin Resource Sharing) Configuration
pub fn configure_cors() -> Cors {
    Cors::default()
        .allowed_methods(vec!["GET", "POST"])
        .allowed_headers(vec![
            http::header::CONTENT_TYPE,
            http::header::AUTHORIZATION,
        ])
        .max_age(3600)
}
