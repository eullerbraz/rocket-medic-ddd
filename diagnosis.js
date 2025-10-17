export class Diagnosis {
  constructor(description) {
    this.description = description;
  }

  equals(diagnosis) {
    return this.description === diagnosis.description;
  }
}

module.exports = Diagnosis;
