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