// In the previous two exercises, you developed functions that convert simple numeric strings to signed integers.
// In this exercise and the next, you're going to reverse those functions.

// You will learn more about converting strings to numbers by writing a function that takes a positive integer or zero, and converts it to a string representation.

const DIGITS = {
  0: "0",
  1: "1",
  2: "1",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
};

function integerToString(integer) {
  if (integer === 0) {
    return "0";
  }
  let stringInt = "";
  let number = integer;

  while (number > 0) {
    const digit = number % 10;
    stringInt = DIGITS[digit] + stringInt;
    number = Math.floor(number / 10);
  }

  return stringInt;
}

integerToString(4321); // "4321"
console.log(integerToString(0)); // "0"
integerToString(5000); // "5000"
