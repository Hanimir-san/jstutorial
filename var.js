if (true) {
    var test = true; // use "var" instead of "let"
    // let test = "hello"; // this raises an error
}
  
alert(test); // true, the variable lives after if


for (var i = 0; i < 10; i++) {
    var one = 1;
    // ...
}

alert(i);   // 10, "i" is visible after loop, it's a global variable
alert(one); // 1, "one" is visible after loop, it's a global variable


function sayHi1() {
    if (true) {
      var phrase = "Hello";
      var phrase = "Goodbye"; // This is not an error
    }
  
    alert(phrase); // works
  }
  
  sayHi1();
  // alert(phrase); // ReferenceError: phrase is not defined


function sayHi2() {
    phrase = "Hi there!"; // (*)

    if (false) {
        var phrase;  
    }

    alert(phrase);

    var phrase; // this is being hoisted  
}
sayHi2();


function sayHi3() {
    alert(phrase);
  
    var phrase = "Hello"; 
    // Because this is a declaration and also an asignment, it doesn't work
    // var declaration always happens at the start of the lexical environment, assignment only where it happens
  }
  
  sayHi3();