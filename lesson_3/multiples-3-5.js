// Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. 
// If the number is divisible by both 3 and 5, append an "!" to the number.

const multiplesOfThreeAndFive = function() {
  for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(String(number) + '!')
    } else if (number % 3 === 0 || number % 5 === 0) {
      console.log(String(number))
    }
  }
}

multiplesOfThreeAndFive();

// Further Exploration: accept arguments

const findMultiplesOfThreeAndFive = function(start, end) {
  for (let number = start; number <= end; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(String(number) + '!')
    } else if (number % 3 === 0 || number % 5 === 0) {
      console.log(String(number))
    }
  }
}

findMultiplesOfThreeAndFive(99, 150);