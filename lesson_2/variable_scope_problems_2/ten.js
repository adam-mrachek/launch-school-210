let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);  // 50
incrementBy(10);     
console.log(total);  // 60
console.log(increment);  // 15

// The `total` variable is globally scoped and available in the `incrementBy` function
// and is incremented by 10 on line 9. The global `increment` variable is unchanged because
// `incrementBy` creates its own local variables and the function parameter is not the same variable.