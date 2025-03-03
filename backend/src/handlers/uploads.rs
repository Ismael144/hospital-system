use crate::models::user::UserRole;
use actix_web::web::{self, ServiceConfig};
use crate::auth::middleware::AuthMiddleware;
use serde::Deserialize;

pub fn config(cfg: &mut ServiceConfig) {
    cfg.service(
        web::scope("uploads")
            .wrap(AuthMiddleware::new(vec![
                UserRole::Admin,
                UserRole::Doctor,
                UserRole::Nurse,
                UserRole::Accountant,
                UserRole::Receptionist,
            ]))
            .service(
                web::scope("")
                    .service(actix_files::Files::new("/", "./uploads").show_files_listing()),
            ),
    );
}
