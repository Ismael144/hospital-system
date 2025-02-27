use crate::auth::auth::AuthService;
use crate::models::user::UserRole;
use actix_web::{
    dev::{forward_ready, Service, ServiceRequest, ServiceResponse, Transform},
    error::ErrorUnauthorized,
    http::header,
    Error, HttpMessage,
};
use futures::future::{ready, Future, Ready};
use serde_json::json;
use std::pin::Pin;
use std::rc::Rc;

pub struct AuthMiddleware {
    pub allowed_roles: Vec<UserRole>,
}

impl AuthMiddleware {
    pub fn new(allowed_roles: Vec<UserRole>) -> Self {
        Self { allowed_roles }
    }
}

impl<S, B> Transform<S, ServiceRequest> for AuthMiddleware
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error> + 'static,
    S::Future: 'static,
    B: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type Transform = AuthMiddlewareService<S>;
    type InitError = ();
    type Future = Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        ready(Ok(AuthMiddlewareService {
            allowed_roles: self.allowed_roles.clone(),
            service: Rc::new(service),
        }))
    }
}

pub struct AuthMiddlewareService<S> {
    service: Rc<S>,
    allowed_roles: Vec<UserRole>,
}

type LocalBoxFuture<T> = Pin<Box<dyn Future<Output = T> + 'static>>;

impl<S, B> Service<ServiceRequest> for AuthMiddlewareService<S>
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error> + 'static,
    S::Future: 'static,
    B: 'static,
{
    type Error = Error;
    type Response = ServiceResponse<B>;
    type Future = LocalBoxFuture<Result<Self::Response, Self::Error>>;

    forward_ready!(service);

    fn call(&self, req: ServiceRequest) -> Self::Future {
        let allowed_roles = self.allowed_roles.clone();
        let service = self.service.clone();

        Box::pin(async move {
            // Extract the token from the Authorization header
            let auth_header = req
                .headers()
                .get(header::AUTHORIZATION)
                .and_then(|h| h.to_str().ok())
                .and_then(|h| h.strip_prefix("Bearer "));

            match auth_header {
                Some(token) => {
                    // Validate the token
                    match AuthService::validate_token(token) {
                        Ok(token_data) => {
                            // Check if the user's role is allowed
                            if allowed_roles.contains(&token_data.claims.role) || allowed_roles.len() == 0 {
                                // Add claims to request extensions for later use
                                req.extensions_mut().insert(token_data.claims);
                                service.call(req).await
                            } else {
                                Err(ErrorUnauthorized(
                                    json!({"message": "Insufficient permissions"}),
                                ))
                            }
                        }
                        Err(_) => Err(ErrorUnauthorized(json!({"message": "Invalid token"}))),
                    }
                }
                _ => Err(ErrorUnauthorized(
                    json!({"message": "No authorization token found"}),
                )),
            }
        })
    }
}
