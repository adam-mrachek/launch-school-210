// PROBLEM
// Implement a function that takes a string and a number times as arguments. 
// The function should return the string repeated times number of times. 
// If times is not a number, return undefined. If it is a negative number, return undefined also. 
// If times is 0, return an empty string. 
// You may ignore the possibility that times is a number that isn't an integer.

function repeat(string, times) {
  if (Number.isInteger(times) === false || times < 0) {
    return undefined;
  }

  let repeatedString = '';
  for (let number = 1; number <= times; number++) {
    repeatedString = repeatedString + string
  }

  return repeatedString;
}

// EXAMPLES & TEST CASES
console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined

// DATA STRUCTURES
// Input: String and integer
// Output: String or undefined
// Execution: String variable to hold resulting string

// ALGORITHM
// First, check to see if `times` argument is an integer and >= 0
//  - If not, return `undefined`
// If `times` argument is 0
//  - return "" (empty string)
// If `times` argument is intger:
//  - declare variable `repeatedString` and initialize to empty string ''
//  - For `times` number of times, add `string` to `repeatedString`
// Return `repeatedString`