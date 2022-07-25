// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

function oddNumbers(num) {
  for (let index = 1; index <= num; index += 2) {
    console.log(index);
  }
}

oddNumbers(99);