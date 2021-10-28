`use strict`;


// the setTimeout function can run a function after a certain amount of time
let greet = (phrase, name) => alert(`${phrase} ${name}!`); 

setTimeout(greet, 1000, 'hello', 'user');

// setTimeout will return a timer identifier with which it can be cancelled if necessary
// After cancellation, the id is preserved
greetTimerId = setTimeout(greet, 10000, 'hello', 'user');
clearTimeout(greetTimerId);

alert(greetTimerId);


// setInterval follows the same syntax and calls a function over and over
greetIntervalId = setInterval(greet, 2000, 'hello', 'world');

// We can then schedule clearInterval to stop the loop after 10 seconds
setTimeout(() => { clearInterval(greetIntervalId); alert('stopped execution'); }, 10000);


// To run a task regularly we can also define nested setTimeout

let num = 0;

let countTimerId = setTimeout(function count () {
    num += 1;
    alert(num);
    countTimerId = setTimeout(count, 2000); 
}, 2000);