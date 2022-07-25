// Write a function that iterates over the integers from 1 to 100, inclusive. 
// For multiples of three, log "Fizz" to the console. 
// For multiples of five, log "Buzz". 
// For numbers which are multiples of both three and five, log "FizzBuzz". 
// For all other numbers, log the number.

// function fizzBuzz() {
//   for (let number = 1; number <= 100; number++) {
//     if (number % 3 === 0) {
//       if (number % 5 === 0) {
//         console.log("FizzBuzz");
//       } else {
//         console.log("Fizz")
//       }
//     } else if (number % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(number);
//     }
//   }
// }

// Further exploration: make more concise

function fizzBuzz() {
  for (let number = 1; number <= 100; number++) {
    let message = '';

    if (number % 3 === 0) {
      message += 'Fizz';
    }

    if (number % 5 === 0) {
      message += 'Buzz';
    }

    console.log(message || number)
  }
}

fizzBuzz();