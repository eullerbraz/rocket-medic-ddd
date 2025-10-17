import { Doctor } from './src/doctor/Doctor.js';
import { Allergy } from './src/patient/Allergy.js';
import { Appointment } from './src/patient/Appointment.js';
import { Exam } from './src/patient/Exam.js';
import { Patient } from './src/patient/Patient.js';
import { Diagnosis } from './src/patient/record/Diagnosis.js';
import { Medication } from './src/patient/record/Medication.js';
import { Treatment } from './src/patient/record/Treatment.js';
import { Address } from './src/shared/Address.js';
import { EmergencyContact } from './src/shared/EmergencyContact.js';

const address = new Address(
  'Rua das Flores',
  '123',
  'São Paulo',
  'SP',
  '12345-678'
);

const emergencyContact = new EmergencyContact('Maria Silva', '(11) 98765-4321');

const patient = new Patient(
  '1',
  '123.456.789-00',
  'João Silva',
  '1990-01-01',
  'Masculino',
  'O+',
  address,
  '(11) 98888-4321',
  'joao.silva@example.com',
  emergencyContact
);

const doctor = new Doctor(
  '1',
  'CRM/SP 123456',
  'Dr. Carlos',
  ['Cardiologia', 'Clinica Geral'],
  '(11) 94321-9876'
);

const allergy = new Allergy('Penicilina');

const appointment = new Appointment(
  '1',
  '2025-01-01',
  patient,
  doctor,
  'Dor no peito',
  'Agendada',
  'Paciente relatou uma dor no peito após esforços fisicos.'
);

const exam = new Exam(
  '1',
  'Hemograma',
  'Normal',
  '2025-01-01',
  'Laboratório X',
  'Dra. Ana',
  patient
);

const diagnosis = new Diagnosis('Hipertensão');
const treatment = new Treatment('Redução no consumo de sal');
const medication = new Medication('Captopril', '25mg');

doctor.addWorkingHours('Segunda', '14:00-18:00');
doctor.addWorkingHours('Quarta', '09:00-12:00');

patient.addAllergy(allergy);
patient.scheduleAppointment(appointment);
patient.addExam(exam);

patient.medicalRecord.addDiagnosis(diagnosis);
patient.medicalRecord.addTreatment(treatment);
patient.medicalRecord.addMedication(medication);

console.log(patient);
console.log(doctor);
