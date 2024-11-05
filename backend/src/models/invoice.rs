use crate::models::DieselResult;
use chrono::{DateTime, Utc};
use diesel::prelude::*;

#[derive(Debug, Clone, Copy, PartialEq, Eq, diesel_derive_enum::DbEnum)]
#[ExistingTypePath = "crate::schema::sql_types::PaymentStatus"]
pub enum PaymentStatus {
    Pending,
    Partial,
    Completed,
    Cancelled,
    Refunded,
}

#[derive(Debug, Clone, Queryable, Identifiable)]
#[diesel(table_name = invoices)]
#[diesel(primary_key(invoice_id))]
pub struct Invoice {
    pub invoice_id: i32,
    pub visit_id: Option<i32>,
    pub generated_at: Option<DateTime<Utc>>,
    pub total_amount: BigDecimal,
    pub payment_status: Option<PaymentStatus>,
    pub notes: Option<String>,
    pub created_by: Option<i32>,
    pub updated_at: Option<DateTime<Utc>>,
}
