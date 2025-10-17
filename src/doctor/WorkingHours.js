export class WorkingHours {
  constructor() {
    this.hours = [];
  }

  addHours(day, timeSlot) {
    this.hours.push({ day, timeSlot });
  }

  removeHours(day, timeSlot) {
    this.hours = this.hours.filter(
      (hour) => !(hour.day === day && hour.timeSlot === timeSlot)
    );
  }

  listHours() {
    return this.hours;
  }

  equals(workingHours) {
    if (this.hours.length !== workingHours.hours.length) {
      return false;
    }

    return this.hours.every(
      (hour, index) =>
        hour.day === workingHours.hours[index].day &&
        hour.timeSlot === workingHours.hours[index].timeSlot
    );
  }
}
