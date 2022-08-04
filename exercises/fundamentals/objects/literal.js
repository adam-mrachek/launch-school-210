// Identify the bug in the following code. Don't run the code until after you've tried to answer.

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];  // To use bracket notation, you must use a string value in the brackets (unless the key is a number)
myObject.a;