// What does this code log to the console?
// Does executing the `foo` function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// It logs '1' to the console because the `foo` function is declaring its own local `bar` variable so it does
// not re-assign the `bar` variable outside the scope of `foo`