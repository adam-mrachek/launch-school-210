// PROBLEM
// Write a function that returns a substring of a string based on a starting index and length.

function substr(string, start, length) {
  if (length <= 0) {
    return '';
  }

  let result = '';
  if (start < 0) {
    start = string.length - 3;
  }

  for (let index = start; index < (start + length) && index < string.length; index++) {
    result = result + string[index]
  }

  return result;
}

// EXAMPLES & TEST CASES
let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""

// DATA STRUCTURES
// Input: String and two integers: one integer representing starting index, second integer representing length
// Ouput: String representing resulting substring
// Execution: local string variable to hold resulting substring

// ALGORITHM
// if `length` is less than or equal to 0, return empty string ''
// Declare variable `result` and initialize to empty string ''
// Starting at index `start` until `index + length`
//  - add char[index] to `result`
// return `result`