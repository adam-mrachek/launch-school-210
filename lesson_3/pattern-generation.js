// PROBLEM:
// Write a function that takes a number of rows as the argument nStars and logs a square of numbers and asterisks. 
// For example, if nStars is 7, log the following pattern:

function generatePattern(nStars) {
  for (let line = 1; line <= nStars; line++) {
    let pattern = [];
    // let stars = nStars - line;

    for (let digit = 1; digit <= line; digit++) {
      pattern.push(digit)
    }

    for (let count = line + 1; count <= nStars; count++) {
      let stars = count.toString().length;
      pattern.push('*'.repeat(stars));
    }

    // pattern.push('*'.repeat(stars));
    console.log(pattern.join(''));
  }
}

// EXAMPLES
generatePattern(20);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

// DATA STRUCTURES
// Input: Integer
// Output: Integers and asteriks as seen in examples

// ALGORITHM
// Starting at index = 1 and up to the given argument, `nStars`:
// - assign empty [] to variable `result` to store value (either number or *)
// - starting at innerIndex = 1 and up to outerindex:
//    - add innerIndex to `result`
// - Add (`nStars` - index) * "*" to `result` array.
// - console.log(result.join(''));