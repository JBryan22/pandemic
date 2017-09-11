import { Pandemic } from './../js/pandemic.js';
import {City} from './../js/city.js';

let city = new City("Seattle", ["Tacoma", "Bellingham", "Bellevue", "Everett", "Bremerton"]);
let pandemic = new Pandemic();

describe('City', function() {
  beforeEach(function() {
    city.infections = 0;
    city.maxed = false;
    city.quarantine = false;
  });

  it('should add infection every time the function is called', function() {
    city.addInfection();
    expect(city.infections).toEqual(1);
  });

  it('should remove infection when remove function is called', function() {
    city.addInfection();
    city.removeInfection();
    expect(city.infections).toEqual(0);
  });

  it('should not remove infection if there are no infections to remove', function() {
    city.removeInfection();
    expect(city.infections).toEqual(0);
  });

  it('should set maxed equal to true if infections are greater than 4', function() {
    city.infections = 4;
    city.addInfection();
    expect(city.maxed).toEqual(true);
  });

  it('should quarantine city when function is called', function() {
    city.quarantineCity();
    expect(city.quarantine).toEqual(true);
  });

});

describe('Pandemic', function() {
  beforeEach(function() {
    pandemic.cities = [];
    pandemic.infectionAmount = 4;
    pandemic.createCities();
  });

  it('should create 14 cities when createCities is called', function() {
    expect(pandemic.cities.length).toEqual(14);
  });

  it('should return the proper amount of total infections on the board', function() {
    pandemic.cities[0].addInfection();
    pandemic.cities[1].addInfection();
    pandemic.cities[2].addInfection();
    pandemic.cities[4].addInfection();
    pandemic.cities[6].addInfection();

    expect(pandemic.getTotalInfections()).toEqual(5);
  });

  it('should infect the proper amount of random cities', function() {
    pandemic.infectRandomCities(4);
    let result = pandemic.getTotalInfections();
    expect(result).toEqual(4);
  });
});
