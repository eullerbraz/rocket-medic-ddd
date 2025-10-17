export class Medication {
  constructor(name, dosage) {
    this.name = name;
    this.dosage = dosage;
  }

  equals(medication) {
    return this.name === medication.name && this.dosage === medication.dosage;
  }
}

module.exports = Medication;
