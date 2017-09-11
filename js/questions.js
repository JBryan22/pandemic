import { City } from './../js/city.js';
import { Pandemic } from './../js/questionnaire.js';

export class Questions {
  constructor (question, answer, wrong1, wrong2, wrong3) {
    this.question = question;
    this.answer = answer;
    this.wrong1 = wrong1;
    this.wrong2 = wrong2;
    this.wrong3 = wrong3;
  }

  shuffle(array) {
    let temp = "";

    //find the length of array.
    let length = array.length;

    //choose 2 elements.
    let element1 = Math.floor(Math.random() * length);
    let element2 = Math.floor(Math.random() * length);
    if (element1 != element2) {
      //store one element as temp.
      temp = array[element1];
      //store second element in first element spot.
      array[element1] = array[element2];
      //store temp into second element spot.
      array[element2] = temp;
    }

    return array;
  }

  randomizeMultipleChoice() {
    let answerArray = [this.answer, this.wrong1, this.wrong2, this.wrong3];

    for (let i = 0; i < 10; i++) {
      this.shuffle(answerArray);
    }

    return answerArray;
  }

  checkAnswer(userChoice) {
    if (userChoice == this.answer) {
      return true;
    }
    else {
      return false;
    }
  }

}

}
