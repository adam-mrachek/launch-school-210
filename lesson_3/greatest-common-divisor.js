// Create a function that computes the Greatest Common Divisor of two positive integers.

function gcd(value1, value2) {
  let numbers = [value1, value2].sort((a, b) => a - b);
  let smallestDivisors = [];
  let greatestDivisor = 1;

  for (let number = 1; number <= numbers[0]; number++) {
    if (numbers[0] % number === 0) {
      smallestDivisors.push(number);
    }
  }
  
  smallestDivisors.forEach(divisor => {
    if (numbers[1] % divisor === 0) {
      greatestDivisor = divisor;
    }
  })

  return greatestDivisor;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1