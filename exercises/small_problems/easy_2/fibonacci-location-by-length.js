// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument.
// (The first Fibonacci number has an index of 1.)

function findFibonacciIndexByLength(digits) {
  let first = 1n;
  let second = 1n;
  let fibNumber;
  let index = 2n;

  while (String(fibNumber).length <= digits) {
    fibNumber = first + second;

    if (BigInt(String(fibNumber).length) === digits) {
      console.log(BigInt(index + 1n));
      return BigInt(index + 1n);
    } else {
      first = second;
      second = fibNumber;
    }

    index++
  }
}


// EXAMPLES & TEST CASES
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// DATA STRUCTURES
// Input: Integer representing the number of digits of fib number we need to find index for
// Output: Number representing index of first fib number with matching number of digits
// Execution: Three variables to hold first and second number along with the fibonacci number

// ALGORITHM
// Declare variable `fibonacciNumber` and initialize to array with first two fib numbers
// For index starting at 3 (first fib number has index of 1 and we know first two fibs are 1):
//  - Calculate fib number by adding values of (index - 1) and (index - 2)
//    - If fib number matches number of digits as argument, return index
//    - else, add fib number to fibonacciNumbers
