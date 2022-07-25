// PROBLEM
// Write two functions that each take two strings as arguments. Their expected behaviors are as follows:
// - The indexOf function searches for the first instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.
// - The lastIndexOf function searches for the last instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.
// - Both functions return -1 if firstString does not contain the substring specified by secondString.

function indexOf(firstString, secondString) {
  let matchData = {
    index: -1,
    matchingChars: ''
  }

  for (let index = 0; index < firstString.length; index++) {
    for (let matchIndex = 0; matchIndex < secondString.length; matchIndex++) {
      if (firstString[index + matchIndex] === secondString[matchIndex]) {
        matchData['matchingChars'] += firstString[index + matchIndex];
      } else {
        matchData['matchingChars'] = '';
        break;
      }
    }
    if (matchData['matchingChars'] === secondString) {
      matchData['index'] = index;

      return matchData['index'];
    }
  }

  return matchData['index'];
}

function lastIndexOf(firstString, secondString) {
  let matchData = {
    indexes: [-1],
    matchingChars: ''
  }

  for (let index = 0; index < firstString.length; index++) {
    for (let matchIndex = 0; matchIndex < secondString.length; matchIndex++) {
      if (firstString[index + matchIndex] === secondString[matchIndex]) {
        matchData['matchingChars'] += firstString[index + matchIndex];
      } else {
        matchData['matchingChars'] = '';
        break;
      }
    }
    if (matchData['matchingChars'] === secondString) {
      matchData['indexes'].push(index);
    }
  }

  return matchData['indexes'].at(-1);
}

// EXAMPLES / TEST CASES
// function indexOf(firstString, secondString) {
//   // statements
// }

// function lastIndexOf(firstString, secondString) {
//   // statements
// }

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

// DATA STRUCTURES
// Input: Two string arguments. The first argument is the string to be searched. Second argument is search pattern.
// Output: Integer representing index of character where substring begins
// Execution: Array to representing each character of string. Hash to hold starting index of matching char, and matching chars to check for match

// ALGORITHM
// Create hash named `matchData` with `index` key set to -1 and matchingChars key set to empty string.
// Go through each character in `firstString` and check to see if it matches first char in `secondString`.
// - If first chars match:
//   - then set `matchdata[index] = index of first matching char`
//   - Add first matching char to `matchData[matchingChars]`
//   - Using length of secondString:
//     - Check characters at each index of `firstString` starting at index of first matching character plus length of `secondString`
//       - If all characters match return `matchData[index]
//       - else set `matchData[index] = -1` and stop iterating
// - Return `matchData[index]` after iterating through all characters 