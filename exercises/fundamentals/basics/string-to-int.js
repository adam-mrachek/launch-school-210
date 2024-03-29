// For this exercise we're going to learn more about type conversion by implementing our own parseInt function that converts a string of numeric characters (including an optional plus or minus sign) to a number.

// The function takes a string of digits as an argument, and returns the appropriate number. 
// Do not use any of the built-in functions for converting a string to a number type.

const DIGITS = { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
                     '5': 5, '6': 6, '6': 6, '7': 7, '8': 8
                   };

function stringToInteger(str) {
  let value = 0;
  let numbers = stringToNumbers(str)

  for (let i = 0; i < str.length; i += 1) {
    value = 10 * value + numbers[i];
  }

  return value;
}

function stringToNumbers(str) {
  let result = [];

  for (let i = 0; i < str.length; i += 1) {
    result.push(DIGITS[str[i]]);
  }

  return result;
}

stringToInteger('4321');      // 4321
stringToInteger('570');       // 570