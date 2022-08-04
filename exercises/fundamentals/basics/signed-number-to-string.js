// In the previous exercise, you reimplemented a function that converts non-negative numbers to strings.
// In this exercise, you're going to extend that function by adding the ability to represent negative numbers.

const DIGITS = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
};

function signedIntegerToString(integer) {
  let sign;

  integer < 1 ? (sign = "-") : (sign = "+");

  if (integer === 0) {
    return "0";
  }

  let stringInt = "";
  let number = Math.abs(integer);

  while (number > 0) {
    const digit = number % 10;
    stringInt = DIGITS[digit] + stringInt;
    number = Math.floor(number / 10);
  }

  stringInt = sign + stringInt;
  console.log(stringInt);
  return stringInt;
}

signedIntegerToString(4321); // "+4321"
signedIntegerToString(-123); // "-123"
signedIntegerToString(0); // "0"
