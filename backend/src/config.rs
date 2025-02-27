use tracing::level_filters::LevelFilter;
use tracing_subscriber::{fmt, EnvFilter};
use actix_cors::Cors;
use actix_web::http;

/// Configuration of tracing for logging
pub fn init_tracing() {
    // Initialize the tracing subscriber
    std::env::set_var("RUST_LOG", "debug"); // Ensure logging is enabled
    
    tracing_subscriber::fmt()
        .with_env_filter(EnvFilter::new("actix_web=debug,diesel=debug,tracing_actix_web=debug,my_app=debug"))
        .with_target(true)
        .with_level(true)
        .with_file(true)
        .with_line_number(true)
        .init();

    tracing::info!("Logging initialized!");
}


/// CORS(Cross Origin Resource Sharing) Configuration
pub fn configure_cors() -> Cors {
    Cors::default()
        .allow_any_origin() // This allows any origin
        .allowed_methods(vec!["GET", "POST", "PUT", "DELETE", "OPTIONS"])
        .allowed_headers(vec![
            http::header::CONTENT_TYPE,
            http::header::AUTHORIZATION,
            http::header::ACCEPT,
        ])
        .max_age(3600)
        .supports_credentials() // Important if you're using cookies or authentication
}
