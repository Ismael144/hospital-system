use tracing_actix_web::TracingLogger;
use tracing_subscriber::EnvFilter;

/// Configuration of tracing for logging
pub fn init_tracing() {
    tracing_subscriber::fmt()
        .with_env_filter(EnvFilter::from_default_env())
        .init()
}