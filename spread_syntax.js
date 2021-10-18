`use strict`;

let sumAll = function(...args){
    let result = 0;
    for (let i of args) result += i;
    return result
}

let showName = function(firstName, lastName, ...titles) {
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[1]);
    alert(arguments[2]);
    alert (firstName + ' ' + lastName);
    for (let title of titles) {
        alert(title);
    }
    alert(titles.length);
}

let arr = [3, 5, 1];
let arr2 = [8, 3, -8, 1];
let merged = [...arr, ...arr2];

let string = "Hello";
alert([...string]);

for(char of string){
    alert(char);
}

// alert(sumAll(1, 2, 3, 4, 5));
// alert(showName("Julius", "Caesar", "Consul", "Imperator"));