// PROBLEM
// Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.
// You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. 
// However, you may not use any other properties or methods from JavaScript's built-in String class.

function trim(str) {
  let chars = str.split('');
  let endWhiteSpace = false;

  while (endWhiteSpace === false) {
    if (chars[0] === ' ') {
      chars.splice(0, 1)
    } else {
      endWhiteSpace = true;
    }
  }

  if (chars.length === 0) {
    return '';
  }

  while (endWhiteSpace === false) {
    if (chars[chars.length - 1] === ' ') {
      chars.splice(chars.length - 1, 1)
    } else {
      endWhiteSpace = true;
    }
  }

  return chars.join('');
}

// EXAMPLES / TEST CASES
console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""

// DATA STRUCTURES
// Input: string
// Output: string with whitespace stripped
// Execution: Array to hold characters of string and mutate as needed to remove whitespace chars

// ALGORITHM
// Declare variable `chars`
// Split string on each character and assign resulting array to `chars`
// To strip whitespace from start of string:
//  - Declare variable `endWhiteSpace` and initialize to false to keep track of when we hit first non-whitespace char
//  - Iterate through string starting at first character
//    - If character is a whitespace, remove character from array
//    - If character is not a whitespace, set `endWhiteSpace = true` and break from loop
// To stripe whitespace from end of string:
//  - Set `endWhiteSpace` back to false
//  - Iterate through string starting at end chars (string.length - 1)
//    - If character is a whitespace, remove character from array
//    - If character is not a whitespace, set `endWhiteSpace = true` and break from loop
// Join characters in `chars` and return