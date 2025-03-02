-- database: :memory:
-- Enable UUID extension for unique identifiers
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-------------------------------------------------
-- 1. ENUM Definitions for Static Values
-------------------------------------------------
CREATE TYPE user_role AS ENUM ('admin', 'receptionist', 'doctor', 'nurse', 'pharmacist', 'accountant');
CREATE TYPE patient_type AS ENUM ('inpatient', 'outpatient');
CREATE TYPE visit_status AS ENUM ('registered', 'triage', 'consultation', 'procedure', 'pharmacy', 'admitted', 'discharged');
CREATE TYPE procedure_type AS ENUM ('theatre', 'katv', 'scan');
CREATE TYPE payment_status AS ENUM ('pending', 'partial', 'completed');

-------------------------------------------------
-- 2. Users Table with UUID Primary Key and Refined Constraints
-------------------------------------------------
CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role user_role NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20) CHECK (phone ~ '^\d{10,15}$'),
    avatar VARCHAR(255),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for faster lookups
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_role ON users(role);

-------------------------------------------------
-- 3. Patients Table with UUID Primary Key and Refined Constraints
-------------------------------------------------
CREATE TABLE patients (
    patient_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    nin VARCHAR(20) UNIQUE,
    age INTEGER CHECK (age >= 0 AND age <= 150),
    gender VARCHAR(10),
    patient_type patient_type NOT NULL,
    phone VARCHAR(20) CHECK (phone ~ '^\d{10,15}$'),
    profile_photo TEXT,
    address TEXT,
    emergency_phone VARCHAR(20) CHECK (emergency_phone ~ '^\d{10,15}$'),
    registered_by uuid REFERENCES users(user_id),
    registered_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_patients_nin ON patients(nin);
CREATE INDEX idx_patients_name ON patients(name);

-------------------------------------------------
-- 4. Visits Table to Track Patient Visits (with UUID references)
-------------------------------------------------
CREATE TABLE visits (
    visit_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_id uuid REFERENCES patients(patient_id),
    visit_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    status visit_status NOT NULL DEFAULT 'registered',
    complaint TEXT,
    total_charges DECIMAL(10,2) DEFAULT 0.00,
    is_discharged BOOLEAN DEFAULT false,
    discharge_date TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_visits_patient ON visits(patient_id);
CREATE INDEX idx_visits_date ON visits(visit_date);

-------------------------------------------------
-- 5. Audit Log Table for Enhanced Audit Trails
-------------------------------------------------
CREATE TABLE audit_log (
    audit_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    table_name VARCHAR(100) NOT NULL,
    operation VARCHAR(10) NOT NULL,  -- e.g., INSERT, UPDATE, DELETE
    record_id uuid,
    changed_data JSONB,
    changed_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-------------------------------------------------
-- 6. Audit Trigger Function Example (for Patients table)
-------------------------------------------------
CREATE OR REPLACE FUNCTION audit_trigger_function() RETURNS TRIGGER AS $$
DECLARE
    data JSONB;
    key_record uuid;
BEGIN
    IF TG_OP = 'DELETE' THEN
        data := to_jsonb(OLD);
        key_record := OLD.patient_id;
    ELSE
        data := to_jsonb(NEW);
        key_record := NEW.patient_id;
    END IF;
    
    INSERT INTO audit_log(table_name, operation, record_id, changed_data, changed_at)
    VALUES (TG_TABLE_NAME, TG_OP, key_record, data, CURRENT_TIMESTAMP);
    
    RETURN NULL;  -- Do not modify the row that fired the trigger
END;
$$ LANGUAGE plpgsql;

-- Attach the audit trigger to the patients table (extend similar triggers to other tables as needed)
CREATE TRIGGER audit_patients
AFTER INSERT OR UPDATE OR DELETE ON patients
FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

-------------------------------------------------
-- 7. Triage Records Table with Refined Constraints
-------------------------------------------------
CREATE TABLE triage_records (
    triage_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    visit_id uuid REFERENCES visits(visit_id),
    nurse_id uuid REFERENCES users(user_id),
    triage_time TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    temperature DECIMAL(4,1),
    blood_pressure VARCHAR(20) CHECK (blood_pressure ~ '^\d{2,3}/\d{2,3}$'),
    heart_rate INTEGER,
    respiratory_rate INTEGER,
    oxygen_saturation INTEGER,
    weight DECIMAL(5,2),
    height DECIMAL(5,2),
    symptoms TEXT,
    notes TEXT,
    charges DECIMAL(10,2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_triage_visit ON triage_records(visit_id);

-------------------------------------------------
-- 8. Doctor Consultations Table with UUID Primary Key
-------------------------------------------------
CREATE TABLE doctor_consultations (
    consultation_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    visit_id uuid REFERENCES visits(visit_id),
    doctor_id uuid REFERENCES users(user_id),
    consultation_time TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    diagnosis TEXT,
    notes TEXT,
    charges DECIMAL(10,2) DEFAULT 0.00,
    discount_percentage INTEGER CHECK (discount_percentage >= 0 AND discount_percentage <= 100),
    discount_locked BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_consultations_visit ON doctor_consultations(visit_id);
CREATE INDEX idx_consultations_doctor ON doctor_consultations(doctor_id);

-------------------------------------------------
-- 9. Procedures Table (Theatre, KATV, Scans)
-------------------------------------------------
CREATE TABLE procedures (
    procedure_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    visit_id uuid REFERENCES visits(visit_id),
    doctor_id uuid REFERENCES users(user_id),
    procedure_type procedure_type NOT NULL,
    procedure_time TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    notes TEXT,
    charges DECIMAL(10,2) DEFAULT 0.00,
    is_modified BOOLEAN NOT NULL DEFAULT false, 
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_procedures_visit ON procedures(visit_id);
CREATE INDEX idx_procedures_type ON procedures(procedure_type);

-------------------------------------------------
-- 10. Medications Catalog Table
-------------------------------------------------
CREATE TABLE medications (
    medication_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    unit_price DECIMAL(10,2) NOT NULL,
    requires_prescription BOOLEAN DEFAULT true,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_medications_name ON medications(name);

-------------------------------------------------
-- 11. Prescriptions Table
-------------------------------------------------
CREATE TABLE prescriptions (
    prescription_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    consultation_id uuid REFERENCES doctor_consultations(consultation_id),
    medication_id uuid REFERENCES medications(medication_id),
    dosage VARCHAR(50) NOT NULL,
    frequency VARCHAR(50) NOT NULL,
    duration_days INTEGER NOT NULL,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_prescriptions_consultation ON prescriptions(consultation_id);

-------------------------------------------------
-- 12. Administered Medications Tracking
-------------------------------------------------
CREATE TABLE administered_medications (
    admin_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    prescription_id uuid REFERENCES prescriptions(prescription_id),
    nurse_id uuid REFERENCES users(user_id),
    administered_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    charges DECIMAL(10,2) DEFAULT 0.00,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_administered_prescription ON administered_medications(prescription_id);
CREATE INDEX idx_administered_nurse ON administered_medications(nurse_id);

-------------------------------------------------
-- 13. Beds Management Table
-------------------------------------------------
CREATE TABLE beds (
    bed_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    bed_number VARCHAR(20) UNIQUE NOT NULL,
    ward VARCHAR(50) NOT NULL,
    is_occupied BOOLEAN DEFAULT false,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_beds_ward ON beds(ward);
CREATE INDEX idx_beds_occupied ON beds(is_occupied);

-------------------------------------------------
-- 14. Bed Allocations Table
-------------------------------------------------
CREATE TABLE bed_allocations (
    allocation_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    visit_id uuid REFERENCES visits(visit_id),
    bed_id uuid REFERENCES beds(bed_id),
    nurse_id uuid REFERENCES users(user_id),
    start_time TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMPTZ,
    daily_charge DECIMAL(10,2) NOT NULL,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_allocations_visit ON bed_allocations(visit_id);
CREATE INDEX idx_allocations_bed ON bed_allocations(bed_id);

-------------------------------------------------
-- 15. Invoices Table
-------------------------------------------------
CREATE TABLE invoices (
    invoice_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    visit_id uuid REFERENCES visits(visit_id),
    generated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10,2) NOT NULL,
    payment_status payment_status DEFAULT 'pending',
    notes TEXT,
    created_by uuid REFERENCES users(user_id),
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_invoices_visit ON invoices(visit_id);
CREATE INDEX idx_invoices_status ON invoices(payment_status);

-------------------------------------------------
-- 16. Update Trigger Function to Maintain updated_at Column
-------------------------------------------------
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Example: Attach update trigger to the users table (repeat for tables with updated_at)
CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_patients_updated_at
BEFORE UPDATE ON patients
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
-- (Add similar triggers for visits, doctor_consultations, medications, bed_allocations, invoices, etc.)
