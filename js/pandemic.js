import { City } from './../js/city.js';
import { Questionnaire } from './../js/questionnaire.js';

export class Pandemic {
  constructor () {
    this.cities = [];
    this.infectionAmount = 4;
    this.totalInfections = 0;
    this.quarantinePoints = 0;
    this.questionnaire = [];
    this.outbreaks = 0;
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

  infectRandomCities() {
    let numberOfCities = this.cities.length;

    for (let i = 0; i < this.infectionAmount; i++) {
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
    if(city.outbroken) {
      return;
    }
    city.outbroken = true;
    city.connections.forEach((connectionCity) => {
      let currentCityIndex = this.cities.findIndex(i => i.name == connectionCity);

      if (this.cities[currentCityIndex].addInfection()) {
        this.outbreak(this.cities[currentCityIndex]);
      }
    });
  }

  buildQuarantinePoints() {

  }


  createQuestions() {
    let question1 = new Question("The tags let and const are a feature of which version?", "ES6", "ES5", "ES4", "ES3");
    let question2 = new Question("Before running your program, you must use which command?", "npm install", "pmn install", "mpn install", "mkn install");
    let question3 = new Question("Javascript is a weakly-typed language similar to:", "Ruby", "C#", "Java", "C++");
    let question4 = new Question("Javascript files should end in which suffix?", ".js", ".j", ".npm", ".gulp");
    let question5 = new Question("When running a Javascript program in Node.js, your app file is located in which folder?", "js", "build/js", "build/js/vendor", "node_modules");
    let question6 = new Question("Which job is tougher?", "Building a skyscrapper", "Being a high school teacher", "Programming in C#?", "Programming in Javascript");

    this.questionnaire.push(question1, question2, question3, question4, question5, question6);
  }

}
