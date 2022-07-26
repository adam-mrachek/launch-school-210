// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument.
// (The first Fibonacci number has an index of 1.)

function findFibonacciIndexByLength(digits) {
  let fibonacciNumbers = [1, 1];
  let fibNumber;

  for (let index = 3; ; index++) {
    fibNumber = fibonacciNumbers[index - 1] + fibonacciNumbers[index - 2];

    if (BigInt(fibNumber.toString().length) === digits) {
      console.log(index)
      return index;
    } else {
      fibonacciNumbers.push(fibNumber);
    }
  }
}


// EXAMPLES & TEST CASES
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// DATA STRUCTURES
// Input: Integer representing the number of digits of fib number we need to find index for
// Output: Number representing index of first fib number with matching number of digits
// Execution: Array to hold all found fib numbers and to find index of match

// ALGORITHM
// Declare variable `fibonacciNumber` and initialize to array with first two fib numbers
// For index starting at 3 (first fib number has index of 1 and we know first two fibs are 1):
//  - Calculate fib number by adding values of (index - 1) and (index - 2)
//    - If fib number matches number of digits as argument, return index
//    - else, add fib number to fibonacciNumbers
