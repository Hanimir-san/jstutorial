`use strict`;

let sayHello = function (firstName, lastName) {
    let getFullName = (firstName, lastName) => firstName + ' ' + lastName;
    alert("Hello" + getFullName(firstName, lastName));
}

let makeCounter = function () {
    let counter = 0;
    let count = function () {
        return counter++;
    }
    return count;
}

function f() {
    let value = Math.random();
  
    function g() {
      debugger; // in console: type alert(value); No such variable!
    }
  
    return g;
  }



// DIY exercises

let sum = function (num1) {
    return function (num2) {
        return num1 + num2;
    }
}

alert(sum(1)(2));


let inBetween = function (a, b) {
    let innerInBetween = function (item) {
        return a <= item && item <= b;
    }
    return innerInBetween;
}

let inArray = function (inputArray) {
    let innerInArray = function (item) {
        return inputArray.includes(item);
    }
    return innerInArray;
}

let byField = function (field){
    let innerByField = function (a, b) {
        return a[`${field}`] > b[`${field}`] ? 1: -1;
    }
    return innerByField;
};

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter( inBetween(3, 6) ) ); // 3,4,5,6
alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];

// by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);

users.sort(byField('name'));
console.log(users);

users.sort(byField('age'));
console.log(users);


function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let shooter = function() { // create a shooter function,
        alert( shooters.indexOf(shooter) ); // that should show its number
      };
      shooters.push(shooter); // and add it to the array
      i++;
    }
  
    // ...and return the array of shooters
    return shooters;
  }
  
  let army = makeArmy();
  
  // all shooters show 10 instead of their numbers 0, 1, 2, 3...
  army[0](); // 10 from the shooter number 0
  army[1](); // 10 from the shooter number 1
  army[2](); // 10 ...and so on.