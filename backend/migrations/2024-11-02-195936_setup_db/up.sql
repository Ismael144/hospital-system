-- Your SQL goes here
-- Enable UUID extension for unique identifiers
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create ENUM types for static values
CREATE TYPE user_role AS ENUM ('admin', 'receptionist', 'doctor', 'nurse', 'pharmacist', 'cashier');
CREATE TYPE patient_type AS ENUM ('inpatient', 'outpatient');
CREATE TYPE visit_status AS ENUM ('registered', 'triage', 'consultation', 'procedure', 'pharmacy', 'admitted', 'discharged');
CREATE TYPE procedure_type AS ENUM ('theatre', 'katv', 'scan');
CREATE TYPE payment_status AS ENUM ('pending', 'partial', 'completed');

-- Users table for all staff members
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role user_role NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on username and role for faster lookups
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_role ON users(role);

-- Patients table
CREATE TABLE patients (
    patient_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    nin VARCHAR(20) UNIQUE,
    age INTEGER CHECK (age >= 0 AND age <= 150),
    gender VARCHAR(10),
    patient_type patient_type NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    emergency_contact VARCHAR(100),
    emergency_phone VARCHAR(20),
    registered_by INTEGER REFERENCES users(user_id),
    registered_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_patients_nin ON patients(nin);
CREATE INDEX idx_patients_name ON patients(name);

-- Visits table to track patient visits
CREATE TABLE visits (
    visit_id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients(patient_id),
    visit_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status visit_status NOT NULL DEFAULT 'registered',
    complaint TEXT,
    total_charges DECIMAL(10,2) DEFAULT 0.00,
    is_discharged BOOLEAN DEFAULT false,
    discharge_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_visits_patient ON visits(patient_id);
CREATE INDEX idx_visits_date ON visits(visit_date);

-- Triage records
CREATE TABLE triage_records (
    triage_id SERIAL PRIMARY KEY,
    visit_id INTEGER REFERENCES visits(visit_id),
    nurse_id INTEGER REFERENCES users(user_id),
    triage_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    temperature DECIMAL(4,1),
    blood_pressure VARCHAR(20),
    heart_rate INTEGER,
    respiratory_rate INTEGER,
    oxygen_saturation INTEGER,
    weight DECIMAL(5,2),
    height DECIMAL(5,2),
    symptoms TEXT,
    notes TEXT,
    charges DECIMAL(10,2) DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_triage_visit ON triage_records(visit_id);

-- Doctor consultations
CREATE TABLE doctor_consultations (
    consultation_id SERIAL PRIMARY KEY,
    visit_id INTEGER REFERENCES visits(visit_id),
    doctor_id INTEGER REFERENCES users(user_id),
    consultation_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    diagnosis TEXT,
    notes TEXT,
    charges DECIMAL(10,2) DEFAULT 0.00,
    discount_percentage INTEGER CHECK (discount_percentage >= 0 AND discount_percentage <= 100),
    discount_locked BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_consultations_visit ON doctor_consultations(visit_id);
CREATE INDEX idx_consultations_doctor ON doctor_consultations(doctor_id);

-- Procedures (Theatre, KATV, Scans)
CREATE TABLE procedures (
    procedure_id SERIAL PRIMARY KEY,
    visit_id INTEGER REFERENCES visits(visit_id),
    doctor_id INTEGER REFERENCES users(user_id),
    procedure_type procedure_type NOT NULL,
    procedure_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    notes TEXT,
    charges DECIMAL(10,2) DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_procedures_visit ON procedures(visit_id);
CREATE INDEX idx_procedures_type ON procedures(procedure_type);

-- Medications catalog
CREATE TABLE medications (
    medication_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    unit_price DECIMAL(10,2) NOT NULL,
    requires_prescription BOOLEAN DEFAULT true,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_medications_name ON medications(name);

-- Prescriptions
CREATE TABLE prescriptions (
    prescription_id SERIAL PRIMARY KEY,
    consultation_id INTEGER REFERENCES doctor_consultations(consultation_id),
    medication_id INTEGER REFERENCES medications(medication_id),
    dosage VARCHAR(50) NOT NULL,
    frequency VARCHAR(50) NOT NULL,
    duration_days INTEGER NOT NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_prescriptions_consultation ON prescriptions(consultation_id);

-- Administered medications tracking
CREATE TABLE administered_medications (
    admin_id SERIAL PRIMARY KEY,
    prescription_id INTEGER REFERENCES prescriptions(prescription_id),
    nurse_id INTEGER REFERENCES users(user_id),
    administered_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    charges DECIMAL(10,2) DEFAULT 0.00,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_administered_prescription ON administered_medications(prescription_id);
CREATE INDEX idx_administered_nurse ON administered_medications(nurse_id);

-- Beds management
CREATE TABLE beds (
    bed_id SERIAL PRIMARY KEY,
    bed_number VARCHAR(20) UNIQUE NOT NULL,
    ward VARCHAR(50) NOT NULL,
    is_occupied BOOLEAN DEFAULT false,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_beds_ward ON beds(ward);
CREATE INDEX idx_beds_occupied ON beds(is_occupied);

-- Bed allocations
CREATE TABLE bed_allocations (
    allocation_id SERIAL PRIMARY KEY,
    visit_id INTEGER REFERENCES visits(visit_id),
    bed_id INTEGER REFERENCES beds(bed_id),
    nurse_id INTEGER REFERENCES users(user_id),
    start_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP WITH TIME ZONE,
    daily_charge DECIMAL(10,2) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_allocations_visit ON bed_allocations(visit_id);
CREATE INDEX idx_allocations_bed ON bed_allocations(bed_id);

-- Invoices
CREATE TABLE invoices (
    invoice_id SERIAL PRIMARY KEY,
    visit_id INTEGER REFERENCES visits(visit_id),
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10,2) NOT NULL,
    payment_status payment_status DEFAULT 'pending',
    notes TEXT,
    created_by INTEGER REFERENCES users(user_id),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_invoices_visit ON invoices(visit_id);
CREATE INDEX idx_invoices_status ON invoices(payment_status);

-- Create a trigger function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for all tables with updated_at
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add similar triggers for other tables with updated_at column
CREATE TRIGGER update_patients_updated_at
    BEFORE UPDATE ON patients
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Continue creating triggers for other tables...
