`use strict`;

alert("Hi");

// Accessing global object via window and globalThis
window.alert("Hello")
globalThis.alert("Hallo")


// Var becomes a property of global object

var greeting = "Konban wa"

function greet () {
    alert("Ohayou gozaimasu")
}

alert(window.greeting);
alert(globalThis.greeting);

window.greet();
globalThis.greet();


// global properties can be added directly
// however don't do this if there is any way to avoid it

window.user = "root";

alert(window.user);


// the global object can be used to check for available language features

!window.Promise ? alert("For the love of god please update your browser"): alert("All good");
!window.Math ? alert("You have go the be kidding me"): alert("thank god");


// If we're really desperate, we can add unsupported functions manually by pollyfilling
if (!window.Promise) {
    window.Promise = function () {
        return "not doing this right now"
    }
  }