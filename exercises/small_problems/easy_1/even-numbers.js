// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

function evenNumbers(num) {
  for (let index = 2; index <= num; index += 2) {
    console.log(index);
  }
}

evenNumbers(99);