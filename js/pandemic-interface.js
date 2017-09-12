import { Pandemic } from './../js/pandemic.js';
import { City } from './../js/city.js';

$(function() {
  let newPandemic = new Pandemic();

  $('#start').click(function() {
    $(".pandemic-board").show();
    newPandemic.createCities();
    newPandemic.createQuestions();
    newPandemic.infectRandomCities();

    const infectionInterval = setInterval(() => {
      newPandemic.infectRandomCities();
      // $('.outer').append("<div class='infection-blocks'></div>")
    }, 2000);
    const level2 = setTimeout( () => {
      newPandemic.infectionAmount++;
    }, 30000);
    const level3 = setTimeout( () => {
      newPandemic.infectionAmount += 2;
    }, 60000);

    const game = setInterval(function() {
      //Loop through cities & append .infection-blocks div
      newPandemic.cities.forEach(function(city) {
        $(`.${city.name} .outer`).text("");
        for(let i = 0; i < city.infections; i++) {
          $(`.${city.name} .outer`).append("<div class='infection-blocks'></div>")
        }
      });
      if (newPandemic.getTotalInfections() > 45) {
        clearInterval(game);
        alert("YOU LOSE");
      } else if (newPandemic.getTotalInfections() == 0) {
        clearInterval(game);
        alert("YOU Win");
      }
    }, 250);
  });

  //add infections


  $('.city').click(function() {
    let cityName = $(this).attr("value");
    let selectedCity = newPandemic.cities[newPandemic.cities.findIndex(i => i.name == cityName)];
    selectedCity.removeInfection();
    $('.infection-blocks:last', this).remove();
  });



  $('.answers').click(function() {

  });
});
