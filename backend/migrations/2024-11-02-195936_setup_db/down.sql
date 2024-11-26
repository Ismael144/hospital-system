-- This file should undo anything in `up.sql`
-- Remove triggers for updated_at column
DROP TRIGGER IF EXISTS update_patients_updated_at ON patients;
DROP TRIGGER IF EXISTS update_users_updated_at ON users;

-- Drop the trigger function
DROP FUNCTION IF EXISTS update_updated_at_column;

-- Drop tables in reverse dependency order
DROP TABLE IF EXISTS invoices;
DROP TABLE IF EXISTS bed_allocations;
DROP TABLE IF EXISTS beds;
DROP TABLE IF EXISTS administered_medications;
DROP TABLE IF EXISTS prescriptions;
DROP TABLE IF EXISTS medications;
DROP TABLE IF EXISTS procedures;
DROP TABLE IF EXISTS doctor_consultations;
DROP TABLE IF EXISTS triage_records;
DROP TABLE IF EXISTS visits;
DROP TABLE IF EXISTS patients;
DROP TABLE IF EXISTS users;

-- Drop ENUM types in reverse order of creation
DROP TYPE IF EXISTS payment_status;
DROP TYPE IF EXISTS procedure_type;
DROP TYPE IF EXISTS visit_status;
DROP TYPE IF EXISTS patient_type;
DROP TYPE IF EXISTS user_role;

-- Drop extensions
DROP EXTENSION IF EXISTS "uuid-ossp";
