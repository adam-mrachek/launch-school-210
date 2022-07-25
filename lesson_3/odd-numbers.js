// Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number (inclusive). 
// All numbers should be logged on separate lines.

function logOddNumbers(num) {
  for (let index = 1; index <= num; index += 2) {
    console.log(index);
  }
}

// logOddNumbers(19);
logOddNumbers(20);
