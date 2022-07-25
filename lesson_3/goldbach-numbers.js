// PROBLEM:
// Write a function named checkGoldbach that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. 
// The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". 
// The function takes as its only parameter, an integer expectedSum, and logs all combinations of two prime numbers whose sum is expectedSum. 
// Log the prime pairs with the smaller number first. 
// If expectedSum is odd or less than 4, your function should log null.

let isPrime = (num) => {
  if (num <= 1 || (num > 2 && num % 2 === 0)) {
    return false;
  }

  for (let index = 3; index < num; index += 2) {
    if (num % index === 0) {
      return false;
    }
  }

  return true;
}

let checkGoldbach = (expectedSum) => {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let primePairs = [];

  for (let number = 1; number <= (expectedSum / 2); number++) {
    if (isPrime(number)) {
      let difference = expectedSum - number;

      if (isPrime(difference)) {
        primePairs.push([number, difference]);
      }
    }
  }

  primePairs.forEach(pair => console.log(pair));
}

// EXAMPLES
checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

// DATA STRUCTURES
// Input: Integer representing expected sum
// Output: Null if `expectedSum` is odd or less than 4.
//         Otherwise, pairs of integers representing pairs of prime numbers whose sum equals `expectedSum`
//         Possibly use arrays to hold pairs.

// ALGORITHM
// - if `expectedSum` is less than 4 or if `expectedSum` is odd
//   - console.log(null)
// - assign an empty [] to variable `primePairs` to hold subarrays of every pair of primes found to equal `expectedSum`
// - For numbers 1 upto (`expectedSum` / 2), do:
//   - if `number` isPrime:
//     - let difference = `expectedSum` - number
//       - if difference isPrime:
//         - add [number, difference] to `primePairs`
// - Iterate through `primePairs` and log each pair

