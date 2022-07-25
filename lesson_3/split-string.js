// PROBLEM
// Write a function that takes two argument:
// 1. a string to be split
// 2. a delimiter character
// The function logs the split strings to the console, as shown in examples below.

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('Error: No delimeter')
    return;
  }

  let splitStrings = [];
  let currentString = '';

  for (let index = 0; index < string.length; index++) {
    debugger;
    if (delimiter === '') {
      splitStrings.push(string[index]);
    } else if (string[index] !== delimiter) {
      currentString = currentString + string[index]
    } else if (string[index] === delimiter) {
      splitStrings.push(currentString);
      currentString = '';
    }
  }

  if (currentString.length !== 0) { 
    splitStrings.push(currentString)
  }
  
  splitStrings.forEach(string => console.log(string));
}

// EXAMPLES / TEST CASES
splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

// DATA STRUCTURES
// Input: string to be split, and a string delimeter character
// Ouput: log of each split string individually
// Execution: An array to hold each split string in individual index. A temporary string variable to create strings between delimeter

// ALGORITHM
// Declare variable `splitStrings` and initialize to empty array
// Declare variable `currentString` and initialize to empty string.
// Iterate through each character in given string:
//  - If character is not delimeter, 
//    - add to `currentString`
//  - if character is delimeter, 
//    - add `currentString` to `splitStrings`
//    - set `currentString` to empty string ''
// After iterating through every character, iterate through `splitStrings` and log each string to console