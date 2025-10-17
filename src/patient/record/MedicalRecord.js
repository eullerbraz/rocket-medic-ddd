import { Diagnosis } from './Diagnosis.js';
import { Medication } from './Medication.js';
import { Treatment } from './Treatment.js';

export class MedicalRecord {
  constructor() {
    this.diagnoses = [];
    this.treatments = [];
    this.medications = [];
  }

  addDiagnosis(diagnosis) {
    if (!(diagnosis instanceof Diagnosis)) {
      throw new Error('Invalid diagnosis object.');
    }

    this.diagnoses.push(diagnosis);
  }

  addTreatment(treatment) {
    if (!(treatment instanceof Treatment)) {
      throw new Error('Invalid treatment object.');
    }

    this.treatments.push(treatment);
  }

  addMedication(medication) {
    if (!(medication instanceof Medication)) {
      throw new Error('Invalid medication object.');
    }

    this.medications.push(medication);
  }

  equals(medicalRecord) {
    return (
      this.diagnoses.length === medicalRecord.diagnoses.length &&
      this.treatments.length === medicalRecord.treatments.length &&
      this.medications.length === medicalRecord.medications.length &&
      this.diagnoses.every((diagnosis, index) =>
        diagnosis.equals(medicalRecord.diagnoses[index])
      ) &&
      this.treatments.every((treatment, index) =>
        treatment.equals(medicalRecord.treatments[index])
      ) &&
      this.medications.every((medication, index) =>
        medication.equals(medicalRecord.medications[index])
      )
    );
  }
}
