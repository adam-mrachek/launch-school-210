// Go over the following program. What does it log to the console at lines 9, 13, 17, and 21? Is it what you expected? Why or why not?

const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

// Line 9: 'Hello'. `myBoolean` evaluates to true so console.log is executed
// Line 13: nothing is logged. `hello` is a truthy value so it evaluates to true. However, the `!` operator changes it to false so console.log is not executed.
// Line 17: 'World'. `myArray evaluates to true and then the `!!` converts it to false and then back to true
// Line 21: '!'. Just one condition in the OR statement needs to evaluate to true for the block to be executed. `myArray` evaluates to true to the block runs.
