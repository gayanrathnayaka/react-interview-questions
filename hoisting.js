//javascript interpreter appears to move declarations of functions, variables, and classes to the top of the code prior to execution.

//functions hoisting

//a function can be called before it is declared

/**
 * Hoisting is happening because of the way javascript interprets code.
 */

sayMyName('Gayan');

function sayMyName(name) {
  console.log(name);
}

//variables hoisting

var test = 'Hello';

function sayMyname() {
  console.log(test); //undefined since the test variable inside the function is hoisted to the top of the function
  var test = 'world';
}

sayMyname();
