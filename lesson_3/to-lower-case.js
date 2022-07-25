// PROBLEM
// Write a function that returns a string converted to lowercase.

function toLowerCase(string) {
  let downcased = '';

  for (let index = 0; index < string.length; index++) {
    let charCode = string.charCodeAt(index);
    if (charCode >= 65 && charCode <= 90) {
      downcased = downcased + String.fromCharCode(charCode + 32);
    } else {
      downcased = downcased + string[index];
    }
  }

  return downcased;
}

// EXAMPLES & TEST CASES
console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"

// DATA STRUCTURES
// Input: String
// Output: String
// Execution: local string variable to hold resulting string

// ALGORITHM
// declare variable `downcased` initialize to empty string ''
// Iteration through each character in `string`
//  - if character is alphabetical between ASCII code 65 and 90 inclusive,
//    - get character ASCII code and add 32
//    - add new character to `downcased`
//  - else,
//    - add character to `downcased`
// Return downcased