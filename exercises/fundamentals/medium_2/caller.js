// The doubler function in the code below takes two arguments: a number to double and return, and a string containing the name of the function's caller.

function doubler(number, caller) {
  console.log(`This function was called by ${caller}.`);
  return number + number;
}

doubler(5, "Victor"); // returns 10
// logs:
// This function was called by Victor.

// Write a makeDoubler function that takes a caller name as an argument,
// and returns a function that has the same behavior as doubler, but with a preset caller.

function makeDoubler(caller) {
  return number => {
    console.log(`This function was called by ${caller}`);
    return number + number;
  };
}

const doubler = makeDoubler('Victor');  // when `makeDoubler` is called, it returns the anonymous function expression from line 16
doubler(5);  // The anonymous function expression retrains access to the `caller` variable in its closure

// NOTE: The anonymous function expression on line 16 is created using an arrow function which uses the following format:
(number) => {
  return number + 100;
}

// However, you can omit the argument parentheses when there's one argument (parentheses are required for 0 arguments or more than 1):
number => {
  return number + 100;
}

// Braces and the return are not required when there's only one line of code to process:
number => number + 100;