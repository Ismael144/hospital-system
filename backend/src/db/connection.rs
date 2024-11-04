use diesel::r2d2::ConnectionManager;
use diesel::PgConnection;
use dotenvy::dotenv;
use r2d2::Pool;
use std::env;

type DBPool = Pool<ConnectionManager<PgConnection>>;

pub struct DBService {
    pub pool: DBPool,
}

impl DBService {
    pub async fn new() -> Self {
        dotenv().ok();

        let connection_string =
            env::var("DATABASE_URL").expect("The database connection string is required");

        let db_manager = ConnectionManager::<PgConnection>::new(connection_string);

        let pool = r2d2::Pool::builder()
            .build(db_manager)
            .expect("Failed to initialize database...");

        Self { pool }
    }
}
