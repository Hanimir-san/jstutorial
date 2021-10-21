`use strict`;


// Functions are a type of object that is also callable
// As such they have properties aswell, such as name

let greet1 = function () {
    alert('hi!');
}

function greet2 () {
    alert('hi!');
}

// Even works with a default parameter that is a new function
// Thought this is silly and probably shouldn't be done
function noGreet(greet3=function () {}){
    alert(greet3.name);
}

alert(greet1.name);
alert(greet2.name);
noGreet();


// Object methods have names too

let userActions = {
    sayHi() {
        return null;
    },
    sayBye: function () {
        return null;
    }
}

alert(userActions.sayHi.name);
alert(userActions.sayBye.name);


// Sometimes it is impossible to figure out the contextual name of a function
// In such cases, it is empty
let arr = [function() {}];

alert(arr[0].name);


// Function objects can also have the length of their parameters

let greeting1 = function (phrase, name) {
    alert(`${phrase} ${name}!`);
}

alert(greeting1.length)

// rest parameters in a function will not be counted
let greeting2 = function (phrase, ...names) {
    alert(`${phrase} ${names}!`);
}

alert(greeting1.length);
alert(greeting2.length);


// custom function properties can be defined too

let greet4 = function () {
    alert('Hello!');
    greet4.counter++;
}

greet4.counter = 0;
greet4();
alert(greet4.counter);
greet4();
alert(greet4.counter);

greet4()

// We can use this behavior to rewrite closures

let makeCounter = function () {
    let counter = function () {
        return counter.count++
    }
    counter.count = 0;

    return counter;
}

let counter = makeCounter();

alert(counter());
alert(counter());


// function expressions can also have names

let greet5 = function(person) {
    alert(`hello ${person}!`);
}

let greet6 = function func(person) {
    alert(`hello ${person}!`);
}

// A function thus named can reference itself via that name
// "func" here will not be visible outside the function scope
// We could normally call "greet7" from the outer lexical record
// But if it is assigned to another variable, that relationship breaks

let greet7 = function func(person) {
    if (person) {
        alert(`Hello ${person}`);
    } else {
        func('Guest');
    }
}

greet7();

// When referencing a function expression within itself, better give it a name right away
// Don't cause bugs by playing with scopes unnecessarilly 



// DIY exercises

let makeCounter2 = function () {
    let counter2 = function () {
        return counter2.count++
    }
    counter2.count = 0;
    counter2.set = function (number) {
        counter2.count = number;
    }
    counter2.decrease = function (number) {
        counter2.count--;
    }

    return counter2;
}

let counter2 = makeCounter2();

alert(counter2());
alert(counter2());
counter2.set(5);
counter2.decrease(2);
alert(counter2());

let sum = function func () {
    return null;
};

//sum(0)(1)(2)(3)(4)(5) == 15