// Create a simple tip calculator.
// The program should prompt for a bill amount and a tip rate. 
// The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
// You can ignore input validation and assume that the user will put in numbers.

let readline = require('readline-sync');

function calculateTip() {
  let bill = readline.question("What is the bill total? ");
  let tipPercentage = readline.question("What is the tip percentage? ");

  bill = Number(bill);
  tipPercentage = Number.parseFloat(tipPercentage / 100);
  let tip = bill * tipPercentage;
  let total = bill + tip;

  console.log(`The tip is \$${tip}.`)
  console.log(`The total is \$${total}.`)
}

calculateTip();