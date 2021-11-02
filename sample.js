`use strict`;

// We can use decorator functions to change the behavior of other existing functions
// e.g. if there is a function that is stable and returns predictable results, we can cache it

let pow = function (x) {
    return x*x;
}

let cachingDecoration = function(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            console.log("Returning from cache.")
            console.log(cache);
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return result
    }
}

result = cachingDecoration(pow);

// the first result will be calculated normally
alert(result(10));
// next time, it will be taken from cache
alert(result(10));

alert(result(20));
alert(result(20));


// The call method of function prototype can be used to pass an explicit "this" to a function
let user = {'name': 'root', 'id': 0}

let getUsername = function (phrase) {
    alert(`${phrase} ${this.name}`);
}

getUsername.call(user, 'hello');


let numbers = {
    'number': 5,
    getNumber: function () { 
        return this.number 
    },
    getPow: function (a) {
        return a * this.getNumber() 
    },
}

let numberCache = function (func) {
    let cache = new Map();
    return function(a) {
        if (cache.has(a)) {
            return cache.get(a);
        }
        let result = func.call(numbers, a);
        cache.set(a, result);
        console.log(cache);
        return result;
    }
}

numbers.getPow = numberCache(numbers.getPow);
alert( numbers.getPow(20) );


// For multi argument functions we use hashing

let add = function(a, b) {
    return a+b;
}

let addCache = function (func) {
    let cache = new Map();
    return function() {
        const key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func(...arguments);
        cache.set(key, result);
        return result;
    }
}

function hash(args) {
    return args[0] + ',' + args[1];
  }

result = addCache(add);
alert(result(5, 5));
