// PROBLEM
// Implement a function that determines whether a string begins with another string. 
// If it does, the function should return true, or false otherwise.

function startsWith(string, searchString) {
  if (searchString.length > string.length) {
    return false;
  }

  if (typeof(string) === 'string' && searchString === '') {
    return true;
  }

  let match = true;

  for (let index = 0; index < searchString.length; index++) {
    if (string[index] !== searchString[index]) {
      match = false;
      break;
    }
  }
  
  return match;
}

// EXAMPLES & TEST CASES
let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false

// DATA STRUCTURES
// Input: Two strings
// Output: Boolean, true or false
// Execution: local variable initialized to boolean to track matching status

// ALGORITHM
// To start, check to see if `searchString` is longer than `string`
//  - if it is, return false
// If `string` is a string and `searchString` is equal to ''
//  - return true
// Declare variable `match` and initialize to true
// Iterate through each character in `serachString`
//  - if character at `string[index]` is equalt to character at `searchString[index]`
//    - Go to next character
//  - else set `match = false` and break loop
// return 'match'