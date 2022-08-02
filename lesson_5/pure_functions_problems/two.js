// Which of the following is a pure function?

function sum(a, b) {  // not pure. writes to the console.
  console.log(a + b);
  return a + b;
}

function sum(a, b) {  // pure. relies solely on its arguments and will return consistent return value (undefined)
  a + b;
}

function sum(a, b) {  // pure. relies solely on its arguments and will return consistent return value (sum of arguments)
  return a + b;
}

function sum(a, b) {  // not pure since it utilizes another function that has side effects (number generator) and will not have consistent return value
  return a + b + Math.random();
}

function sum(a, b) {  // pure. consistent return value
  return 3.1415;
}