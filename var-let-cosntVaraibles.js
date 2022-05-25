var testVar1 = 'hello var 1';
var testVar1 = 'hello var 1'; //can be redeclare

varTest1 = () => {
  console.log(test3);
  var test3 = 'hello var 3';
};

varTest1();

//let is block scoped

let letVar1 = 'hello let 1';
letVar1 = 'hello let 1'; //can be updated
//let letVar1 = 'hello let 2'; // cannot be re-declared

testLet = () => {
  if (true) {
    let tst = 'hello let 3';
  }
  console.log(tst); // cannot be accessed outside the block
};

testLet();
