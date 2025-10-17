import { Allergy } from './Allergy.js';
import { Appointment } from './Appointment.js';
import { Exam } from './Exam.js';
import { Diagnosis } from './record/Diagnosis.js';
import { MedicalRecord } from './record/MedicalRecord.js';
import { Medication } from './record/Medication.js';
import { Treatment } from './record/Treatment.js';

export class Patient {
  constructor(
    id,
    identificationDocument,
    name,
    birthDate,
    gender,
    bloodtype,
    address,
    phone,
    email,
    emergencyContact
  ) {
    this.id = id;
    this.identificationDocument = identificationDocument;
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    this.bloodtype = bloodtype;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.emergencyContact = emergencyContact;
    this.allergies = [];
    this.appointments = [];
    this.exams = [];
    this.medicalRecord = new MedicalRecord();
  }

  addAllergy(allergy) {
    if (!(allergy instanceof Allergy)) {
      throw new Error('Invalid allergy object.');
    }

    const hasAllergy = this.allergies.some((a) => a.equals(allergy));

    if (!hasAllergy) {
      this.allergies.push(allergy);

      console.log(`Allergy ${allergy.type} added to patient ${this.name}.`);
    } else {
      console.log(
        `Allergy ${allergy.type} already exists for patient ${this.name}.`
      );
    }
  }

  addDiagnosis(description) {
    const diagnosis = new Diagnosis(description);

    this.medicalRecord.addDiagnosis(diagnosis);

    console.log(`Diagnosis added to medical record for patient ${this.name}.`);
  }

  addExam(exam) {
    if (!(exam instanceof Exam)) {
      throw new Error('Invalid exam object.');
    }

    this.exams.push(exam);

    console.log(`Exam ${exam.type} added with result: ${exam.result}.`);
  }

  addMedication(name, dosage) {
    const medication = new Medication(name, dosage);

    this.medicalRecord.addMedication(medication);

    console.log(`Medication added to medical record for patient ${this.name}.`);
  }

  addTreatment(description) {
    const treatment = new Treatment(description);

    this.medicalRecord.addTreatment(treatment);

    console.log(`Treatment added to medical record for patient ${this.name}.`);
  }

  scheduleAppointment(appointment) {
    if (!(appointment instanceof Appointment)) {
      throw new Error('Invalid appointment object.');
    }

    const hasConflict = this.appointments.some((a) =>
      a.hasConflict(appointment)
    );

    if (!hasConflict) {
      this.appointments.push(appointment);

      console.log(
        `Appointment scheduled for ${appointment.date} with ${appointment.doctor.name}.`
      );
    } else {
      console.log(`Appointment conflict detected for patient ${this.name}.`);
    }
  }
}
