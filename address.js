class Address {
  constructor(street, number, city, state, zipCode) {
    this.street = street;
    this.number = number;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
  }

  equals(address) {
    return (
      this.street === address.street &&
      this.number === address.number &&
      this.city === address.city &&
      this.state === address.state &&
      this.zipCode === address.zipCode
    );
  }
}

module.exports = Address;
