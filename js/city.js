import { Pandemic } from './../js/pandemic.js';

export class City {
  constructor (name, connections) {
    this.name = name;
    this.connections = connections; //array
    this.infections = 0;
    this.quarantine = false;
    this.maxed = false;
    this.outbroken = false;
  }

  addInfection() {
    if (this.maxed) {
      return true;
    }

    this.infections++;

    if (this.infections > 4) {
      this.maxed = true;
    }
  }

  removeInfection() {
    if (this.infections > 0) {
      this.infections--;
    }
    this.maxed = false;
    this.outbroken = false;
  }

  quarantineCity() {
    this.quarantine = true;
  }
}
