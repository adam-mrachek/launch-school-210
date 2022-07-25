// Write a function logMultiples that takes one argument number. 
// It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

// You may assume that number is an integer between 0 and 100.

// const logMultiples = function(num) {
//   for (let number = 100; number >= 0; number--) {
//     if (number % 2 === 1) {
//       if (number % num === 0) {
//         console.log(number);
//       }
//     }
//   }
// }

// Further Exploration - more efficient approach

const logMultiples = function(num) {
  let largestMultiple = Math.floor(100 / num) * num;  // find largest multiple of argument less than 100
  
  for (let number = largestMultiple; number > 0; number -= num) {  // decrement number by argument to find next multiple
    if (number % 2 === 1) {
      console.log(number);
    }
  }
}

logMultiples(17);
logMultiples(21);