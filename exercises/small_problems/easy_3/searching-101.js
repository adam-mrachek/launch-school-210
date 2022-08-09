// Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].
const readline = require("readline-sync");

function numSuffix(number) {
  const specialNums = [11, 12, 13];
  const ending = number % 10;
  let suffix;

  if (specialNums.includes(number)) {
    suffix = "th";
  } else if (ending === 1) {
    suffix = "st";
  } else if (ending === 2) {
    suffix = "nd";
  } else if (ending === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  return `${number}${suffix}`;
}

function searchNumbers() {
  const numbers = [];
  let numToSearch;

  for (let i = 1; i <= 5; i += 1) {
    const number = Number(
      readline.question(`Enter the ${numSuffix(i)} number: `)
    );
    numbers.push(number);
  }

  numToSearch = Number(readline.question("Enter the last number: "));

  if (numbers.includes(numToSearch)) {
    console.log(`The number ${numToSearch} appears in ${numbers}.`);
  } else {
    console.log(`The number ${numToSearch} does not appear in ${numbers}.`);
  }
}

searchNumbers();
