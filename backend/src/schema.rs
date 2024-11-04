// @generated automatically by Diesel CLI.

pub mod sql_types {
    #[derive(diesel::query_builder::QueryId, Clone, diesel::sql_types::SqlType, Debug)]
    #[diesel(postgres_type(name = "patient_type"))]
    pub struct PatientType;

    #[derive(diesel::query_builder::QueryId, Clone, diesel::sql_types::SqlType, Debug)]
    #[diesel(postgres_type(name = "payment_status"))]
    pub struct PaymentStatus;

    #[derive(diesel::query_builder::QueryId, Clone, diesel::sql_types::SqlType, Debug)]
    #[diesel(postgres_type(name = "procedure_type"))]
    pub struct ProcedureType;

    #[derive(diesel::query_builder::QueryId, Clone, diesel::sql_types::SqlType, Debug)]
    #[diesel(postgres_type(name = "user_role"))]
    pub struct UserRole;

    #[derive(diesel::query_builder::QueryId, Clone, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "visit_status"))]
    pub struct VisitStatus;
}

diesel::table! {
    administered_medications (admin_id) {
        admin_id -> Int4,
        prescription_id -> Nullable<Int4>,
        nurse_id -> Nullable<Int4>,
        administered_at -> Nullable<Timestamptz>,
        charges -> Nullable<Numeric>,
        notes -> Nullable<Text>,
        created_at -> Nullable<Timestamptz>,
    }
}

diesel::table! {
    bed_allocations (allocation_id) {
        allocation_id -> Int4,
        visit_id -> Nullable<Int4>,
        bed_id -> Nullable<Int4>,
        nurse_id -> Nullable<Int4>,
        start_time -> Nullable<Timestamptz>,
        end_time -> Nullable<Timestamptz>,
        daily_charge -> Numeric,
        notes -> Nullable<Text>,
        created_at -> Nullable<Timestamptz>,
        updated_at -> Nullable<Timestamptz>,
    }
}

diesel::table! {
    beds (bed_id) {
        bed_id -> Int4,
        #[max_length = 20]
        bed_number -> Varchar,
        #[max_length = 50]
        ward -> Varchar,
        is_occupied -> Nullable<Bool>,
        notes -> Nullable<Text>,
        created_at -> Nullable<Timestamptz>,
        updated_at -> Nullable<Timestamptz>,
    }
}

diesel::table! {
    doctor_consultations (consultation_id) {
        consultation_id -> Int4,
        visit_id -> Nullable<Int4>,
        doctor_id -> Nullable<Int4>,
        consultation_time -> Nullable<Timestamptz>,
        diagnosis -> Nullable<Text>,
        notes -> Nullable<Text>,
        charges -> Nullable<Numeric>,
        discount_percentage -> Nullable<Int4>,
        discount_locked -> Nullable<Bool>,
        created_at -> Nullable<Timestamptz>,
        updated_at -> Nullable<Timestamptz>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::PaymentStatus;

    invoices (invoice_id) {
        invoice_id -> Int4,
        visit_id -> Nullable<Int4>,
        generated_at -> Nullable<Timestamptz>,
        total_amount -> Numeric,
        payment_status -> Nullable<PaymentStatus>,
        notes -> Nullable<Text>,
        created_by -> Nullable<Int4>,
        updated_at -> Nullable<Timestamptz>,
    }
}

diesel::table! {
    medications (medication_id) {
        medication_id -> Int4,
        #[max_length = 100]
        name -> Varchar,
        description -> Nullable<Text>,
        unit_price -> Numeric,
        requires_prescription -> Nullable<Bool>,
        is_active -> Nullable<Bool>,
        created_at -> Nullable<Timestamptz>,
        updated_at -> Nullable<Timestamptz>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::PatientType;

    patients (patient_id) {
        patient_id -> Int4,
        #[max_length = 100]
        name -> Varchar,
        #[max_length = 20]
        nin -> Nullable<Varchar>,
        age -> Nullable<Int4>,
        #[max_length = 10]
        gender -> Nullable<Varchar>,
        patient_type -> PatientType,
        #[max_length = 20]
        phone -> Nullable<Varchar>,
        address -> Nullable<Text>,
        #[max_length = 100]
        emergency_contact -> Nullable<Varchar>,
        #[max_length = 20]
        emergency_phone -> Nullable<Varchar>,
        registered_by -> Nullable<Int4>,
        registered_at -> Nullable<Timestamptz>,
        updated_at -> Nullable<Timestamptz>,
    }
}

diesel::table! {
    prescriptions (prescription_id) {
        prescription_id -> Int4,
        consultation_id -> Nullable<Int4>,
        medication_id -> Nullable<Int4>,
        #[max_length = 50]
        dosage -> Varchar,
        #[max_length = 50]
        frequency -> Varchar,
        duration_days -> Int4,
        notes -> Nullable<Text>,
        created_at -> Nullable<Timestamptz>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::ProcedureType;

    procedures (procedure_id) {
        procedure_id -> Int4,
        visit_id -> Nullable<Int4>,
        doctor_id -> Nullable<Int4>,
        procedure_type -> ProcedureType,
        procedure_time -> Nullable<Timestamptz>,
        description -> Nullable<Text>,
        notes -> Nullable<Text>,
        charges -> Nullable<Numeric>,
        created_at -> Nullable<Timestamptz>,
    }
}

diesel::table! {
    triage_records (triage_id) {
        triage_id -> Int4,
        visit_id -> Nullable<Int4>,
        nurse_id -> Nullable<Int4>,
        triage_time -> Nullable<Timestamptz>,
        temperature -> Nullable<Numeric>,
        #[max_length = 20]
        blood_pressure -> Nullable<Varchar>,
        heart_rate -> Nullable<Int4>,
        respiratory_rate -> Nullable<Int4>,
        oxygen_saturation -> Nullable<Int4>,
        weight -> Nullable<Numeric>,
        height -> Nullable<Numeric>,
        symptoms -> Nullable<Text>,
        notes -> Nullable<Text>,
        charges -> Nullable<Numeric>,
        created_at -> Nullable<Timestamptz>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::UserRole;

    users (user_id) {
        user_id -> Int4,
        #[max_length = 50]
        username -> Varchar,
        password_hash -> Text,
        role -> UserRole,
        #[max_length = 100]
        full_name -> Varchar,
        #[max_length = 100]
        email -> Varchar,
        #[max_length = 20]
        phone -> Nullable<Varchar>,
        is_active -> Nullable<Bool>,
        created_at -> Nullable<Timestamptz>,
        updated_at -> Nullable<Timestamptz>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::VisitStatus;

    visits (visit_id) {
        visit_id -> Int4,
        patient_id -> Nullable<Int4>,
        visit_date -> Nullable<Timestamptz>,
        status -> VisitStatus,
        complaint -> Nullable<Text>,
        total_charges -> Nullable<Numeric>,
        is_discharged -> Nullable<Bool>,
        discharge_date -> Nullable<Timestamptz>,
        created_at -> Nullable<Timestamptz>,
        updated_at -> Nullable<Timestamptz>,
    }
}

diesel::joinable!(administered_medications -> prescriptions (prescription_id));
diesel::joinable!(administered_medications -> users (nurse_id));
diesel::joinable!(bed_allocations -> beds (bed_id));
diesel::joinable!(bed_allocations -> users (nurse_id));
diesel::joinable!(bed_allocations -> visits (visit_id));
diesel::joinable!(doctor_consultations -> users (doctor_id));
diesel::joinable!(doctor_consultations -> visits (visit_id));
diesel::joinable!(invoices -> users (created_by));
diesel::joinable!(invoices -> visits (visit_id));
diesel::joinable!(patients -> users (registered_by));
diesel::joinable!(prescriptions -> doctor_consultations (consultation_id));
diesel::joinable!(prescriptions -> medications (medication_id));
diesel::joinable!(procedures -> users (doctor_id));
diesel::joinable!(procedures -> visits (visit_id));
diesel::joinable!(triage_records -> users (nurse_id));
diesel::joinable!(triage_records -> visits (visit_id));
diesel::joinable!(visits -> patients (patient_id));

diesel::allow_tables_to_appear_in_same_query!(
    administered_medications,
    bed_allocations,
    beds,
    doctor_consultations,
    invoices,
    medications,

    patients,
    prescriptions,
    procedures,
    triage_records,
    users,
    visits,
);
