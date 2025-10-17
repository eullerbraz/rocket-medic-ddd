class EmergencyContact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  equals(address) {
    return this.name === address.name && this.phone === address.phone;
  }
}

module.exports = EmergencyContact;
