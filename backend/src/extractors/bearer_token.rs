use crate::error_archive::ErrorArchive;
use actix_web::{dev::Payload, http::header, FromRequest, HttpRequest};
use futures::future::{ready, Ready};

pub struct BearerToken {
    #[allow(unused_variables)]
    pub token: String,
}

impl FromRequest for BearerToken {
    type Error = ErrorArchive;
    type Future = Ready<Result<Self, Self::Error>>;

    fn from_request(req: &HttpRequest, _: &mut Payload) -> Self::Future {
        if let Some(auth_header) = req.headers().get(header::AUTHORIZATION) {
            if let Ok(auth_str) = auth_header.to_str() {
                if auth_str.starts_with("Bearer ") {
                    let token = auth_str[7..].to_string();
                    return ready(Ok(Self { token }));
                }
            }
        }

        ready(Err(ErrorArchive::Unauthorized(
            "Invalid or missing bearer token".into(),
        )))
    }
}
