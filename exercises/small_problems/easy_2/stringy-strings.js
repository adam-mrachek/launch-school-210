// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'.
// The length of the string should match the given integer.

function stringy(number) {
  let result = '';

  for (let index = 1; index <= number; index++) {
    if (index % 2 === 0) {
      result += '0';
    } else {
      result += '1';
    }
  }
  console.log(result);
  return result;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
