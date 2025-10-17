export class Allergy {
  constructor(type) {
    this.type = type;
  }

  equals(allergy) {
    return this.type === allergy.type;
  }
}
