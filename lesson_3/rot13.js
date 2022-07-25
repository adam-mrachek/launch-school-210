// PROBLEM
// Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

//For each character in the original String:
// - If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. Thus, a becomes n. If you reach the end of the alphabet, return to the beginning. Thus, o becomes b.
// - Letter transformations preserve case. A becomes N while a becomes n.
// - Don't modify characters that are not letters.

// Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.
const ROTATION = 13;
const LETTERS_IN_ALPHABET = 26;
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";

function rot13(string) {
  let translatedStr = '';

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];

    if (UPPERCASE.includes(char)) {
      let newIndex = (UPPERCASE.indexOf(char) + ROTATION) % LETTERS_IN_ALPHABET;
      translatedStr = translatedStr + UPPERCASE[newIndex];
    } else if (LOWERCASE.includes(char)) {
      let newIndex = (LOWERCASE.indexOf(char) + ROTATION) % LETTERS_IN_ALPHABET;
      translatedStr = translatedStr + LOWERCASE[newIndex];
    } else {
      translatedStr = translatedStr + string[index];
    }
  }

  return translatedStr;
}

// EXAMPLES & TEST CASES
console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

// It's worth noting that rot13 applied twice results in the original string:

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.

// DATA STRUCTURES
// Input: String
// Output: String
// Execution: - two arrays or strings to represent upper and lower-case alphabet characters,
//            - string variable to hold translated string

// ALOGRITHM
// Declare variable `LOWERCASE` and initialize to string of lower-case chars a-z
// Declare variable 'UPPERCASE` and initialize to string of upper-case chars A-Z
// Declare variable `translated` and initialize to empty string ''
// For each character in `string` starting at index 0:
//  - Get index of char in `UPPERCASE`
//    - if `index` is equal to -1, do nothing since character is not UPPERCASE 
//    - else, let `newIndex` equal index + 13
//      - if `newIndex` > 26, newIndex = newIndex - 26
//    - add `UPPERCASE[newIndex]` to `translated`
//  - Get index of char in 'LOWERCASE'
//    - if `index` is equal to -1, do nothing since character is not LOWERCASE 
//    - else, let `newIndex` equal index + 13
//      - if `newIndex` > 26, newIndex = newIndex - 26
//    - add `LOWERCASE[newIndex]` to `translated`
//  - If char is not included in `UPPERCASE` or `LOWERCASE`, add char to `translated`
// Return translated
