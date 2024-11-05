use crate::impls::serde_impls::{
    bigdecimal_serialize, option_bigdecimal_serialize, option_naive_date_time_serialize,
};
use crate::models::DieselResult;
use crate::schema::invoices;
use bigdecimal::BigDecimal;
use chrono::NaiveDateTime;
use diesel::prelude::*;
use serde::Serialize;
use crate::models::user::User;

#[derive(Debug, Clone, Copy, PartialEq, Eq, diesel_derive_enum::DbEnum, Serialize)]
#[ExistingTypePath = "crate::schema::sql_types::PaymentStatus"]
pub enum PaymentStatus {
    Pending,
    Partial,
    Completed,
    Cancelled,
    Refunded,
}

#[derive(Debug, Clone, Queryable, Identifiable, Serialize, Associations)]
#[diesel(table_name = invoices)]
#[diesel(primary_key(invoice_id), belongs_to(User, foreign_key = created_by))]
pub struct Invoice {
    pub invoice_id: i32,
    pub visit_id: Option<i32>,
    #[serde(with = "option_naive_date_time_serialize")]
    pub generated_at: Option<NaiveDateTime>,
    #[serde(with = "bigdecimal_serialize")]
    pub total_amount: BigDecimal,
    pub payment_status: Option<PaymentStatus>,
    pub notes: Option<String>,
    pub created_by: Option<i32>,
    #[serde(with = "option_naive_date_time_serialize")]
    pub updated_at: Option<NaiveDateTime>,
}

#[derive(Insertable, AsChangeset)]
#[diesel(table_name = invoices)]
pub struct NewInvoice<'a> {
    pub visit_id: i32, 
    pub generated_at: Option<NaiveDateTime>, 
    pub total_amount: BigDecimal, 
    pub payment_status: Option<PaymentStatus>,
    pub notes: &'a str, 
    pub created_by: Option<i32>,
}