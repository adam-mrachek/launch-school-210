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
    }
    first = second;
    second = fibNumber;

    index++;
  }
}

// EXAMPLES & TEST CASES
findFibonacciIndexByLength(2n);
findFibonacciIndexByLength(3n);
findFibonacciIndexByLength(10n);
findFibonacciIndexByLength(16n);
findFibonacciIndexByLength(100n);
findFibonacciIndexByLength(1000n);
findFibonacciIndexByLength(10000n);

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
