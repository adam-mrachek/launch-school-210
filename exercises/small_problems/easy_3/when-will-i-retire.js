// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

const readline = require("readline-sync");

function calcRetirement() {
  let age;
  let retirementAge;
  let yearsToGo;
  const date = new Date();
  const thisYear = new Date().getFullYear();

  age = Number(readline.question("What is your age? "));
  retirementAge = Number(
    readline.question("At what age would you like to retire?")
  );

  yearsToGo = retirementAge - age;
  date.setFullYear(thisYear + yearsToGo);

  console.log(`It's ${thisYear}. You will retire in ${date.getFullYear()}.`);
  console.log(`You only have ${yearsToGo} years of work to go!`);
}

calcRetirement();
