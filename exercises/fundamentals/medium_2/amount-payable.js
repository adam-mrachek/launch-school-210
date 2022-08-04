// What does the following code log? Why is this so?

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + item * quantity;
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 45

// Because of closures, `totalPayable` retains access to the variables defined in its enclosing scope.
// In this code, the enclosing scope includes `startingBalance`, `chicken`, and `chickenQuanity`.
// When `totalPayable` is invoked on line 12 and 15, the values of the variables passed in as arguments
// are dynamically looked up each time the function is called. So, the value of `startingBalance`
// was different (5 and 10) each time `totalPayable` was invoked.
