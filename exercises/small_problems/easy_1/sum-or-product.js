// Write a program that asks the user to enter an integer greater than 0, 
// then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

let readline = require('readline-sync');

let input = readline.question("Please enter an integer greater than 0: ");
let computation = readline.question("Enter 's' to compute the sum, or 'p' to compute the product: ");

if (computation === 's') {
  let sum = 0;
  for (let number = 1; number <= input; number++) {
    sum += number;
  }

  console.log(`The sum of the integers between 1 and ${input} is ${sum}.`)
}

if (computation === 'p') {
  let product = 1;
  for (let number = 1; number <= input; number++) {
    product *= number;
  }

  console.log(`The product of integers between 1 and ${input} is ${product}.`)
}