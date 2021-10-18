'use strict';

class Calculator {
  constructor() {
    this.name = 'Calculator';
    this.calculate = function (inputString) {
      let inputArray = inputString.split();
      let inputNumber = 0;
      let result = 0;
      inputArray.forEach(element, index, array => {
        if (index === 0) {
          inputNumber = parseInt(array[index]);
          result += inputNumber;
        }
        else {
          inputNumber = parseInt([array[index-1]])
        }
      });
    }
  }
}