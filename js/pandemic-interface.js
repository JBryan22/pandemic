import { Pandemic } from './../js/pandemic.js';
import { City } from './../js/city.js';

$(function() {
  $('#start').click(function() {
    let newPandemic = new Pandemic();
    newPandemic.createCities();
    newPandemic.createQuestions();
    const infectionInterval = setInterval(() => {
      newPandemic.infectRandomCities();
    }, 2000);
    const level2 = setTimeout( () => {
      newPandemic.infectionAmount++;
    }, 30000);
    const level3 = setTimeout( () => {
      newPandemic.infectionAmount += 2;
    }, 60000);
  });

  $('.city').click(function() {
    let selectedCity = newPandemic.cities.findIndex(i => i.name == $(this).val());

    selectedCity.removeInfection();
    //change text on board
  });

  

  $('.answers').click(function() {

  });
});
