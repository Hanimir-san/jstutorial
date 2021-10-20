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