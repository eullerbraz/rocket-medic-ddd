export class Treatment {
  constructor(description) {
    this.description = description;
  }

  equals(treatment) {
    return this.description === treatment.description;
  }
}

module.exports = Treatment;
