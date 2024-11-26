use actix_cors::Cors;
use actix_web::http;

/// Configuration of tracing for logging
pub fn init_tracing() {
    // Initialize the tracing subscriber
    tracing_subscriber::fmt()
        .with_target(true)
        .with_thread_ids(true)
        .with_line_number(true)
        .with_file(true)
        .with_ansi(true)
        .init();

    tracing::info!("Logging initialized!");
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
