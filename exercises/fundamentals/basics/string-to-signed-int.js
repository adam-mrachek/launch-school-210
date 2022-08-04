// Write a function that takes a string of digits and returns the appropriate number as an integer.
// The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number.
// If there is no sign, return a positive number.

const DIGITS = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8 };

function stringToSignedInteger(str) {
  let value = 0;
  let sign = "";

  const digits = str.split("");
  if (digits[0] === "-" || digits[0] === "+") {
    sign = digits.shift();
  }

  const numbers = stringToNumbers(digits);

  for (let i = 0; i < digits.length; i += 1) {
    value = 10 * value + numbers[i];
  }

  if (sign === "-") {
    value = -value;
  }
  console.log(value);
  return value;
}

function stringToNumbers(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 1) {
    result.push(DIGITS[str[i]]);
  }

  return result;
}

stringToSignedInteger("4321"); // 4321
stringToSignedInteger("-570"); // -570
stringToSignedInteger("+100"); // 100
