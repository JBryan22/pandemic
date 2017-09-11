import {City} from './../js/city.js';

export class Pandemic {
  constructor () {
    this.cities = [];
    this.infectionAmount = 4;
    this.totalInfections = 0;
  }

  createCities() {
    this.cities = [];
    let seattle = new City("Seattle", ["Tacoma", "Bellingham", "Bellevue", "Everett", "Bremerton"]);
    let tacoma = new City("Tacoma", ["Seattle", "Vancouver", "Bellevue"]);
    let vancouver = new City("Vancouver", ["Tacoma", "LongBeach"]);
    let bellingham = new City("Bellingham", ["Everett", "Seattle", "Bellevue"]);
    let bellevue = new City("Bellevue", ["Seattle", "Tacoma", "Bellingham", "Everett", "Leavenworth"]);
    let everett = new City("Everett", ["Seattle", "Bellevue", "Bellingham", "Bremerton"]);
    let sequim = new City("Sequim", ["Forks", "LongBeach", "Bremerton"]);
    let spokane = new City("Spokane", ["Yakima", "Kennewick", "Leavenworth"]);
    let forks = new City("Forks", ["Sequim", "Bremerton", "LongBeach"]);
    let yakima = new City("Yakima", ["Leavenworth", "Kennewick", "Spokane"]);
    let kennewick = new City("Kennewick", ["Leavenworth", "Spokane", "Yakima"]);
    let leavenworth = new City("Leavenworth", ["Bellevue", "Yakima", "Kennewick", "Spokane"]);
    let longbeach = new City("LongBeach", ["Sequim", "Forks", "Vancouver"]);
    let bremerton = new City("Bremerton", ["Sequim", "Forks", "Seattle"]);

    this.cities.push(seattle, tacoma, vancouver, bellingham, bellevue, everett, sequim, spokane, forks, yakima, kennewick, leavenworth, longbeach, bremerton);
    }

  infectRandomCities(amount) {
    let numberOfCities = this.cities.length;

    for (let i = 0; i < amount; i++) {
      if (this.cities[Math.floor(Math.random() * numberOfCities)].addInfection()) {
        this.outbreak(this.cities[i]);
      };
    }

    this.totalInfections = this.getTotalInfections();
  }

  getTotalInfections() {
    let total = 0;
    this.cities.forEach(function(city) {
      total += city.infections;
    });
    return total;
  }

  outbreak(city) {
    city.connections.forEach(function(connectionCity) {
      let currentCityIndex = this.cities[this.cities.findIndex(thisCity => thisCity.name == connectionCity)];
      if (this.cities[currentCityIndex].addInfection()) {
        this.outbreak(this.cities[currentCityIndex]);
      }
    })

  }

}
