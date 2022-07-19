// Please predict the output of the following programs, and explain why they output what they do.

let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a);  // => outer
testScope();     // => inner
console.log(a);  // => outer

// There are two `a` variables in this code. The first `a` is declared in the "global" scope outside of the scope of the function.
// The second `a` variable is declared inside `testScope` and is scoped to the function. Because it is a declaration, it is a new `a` variable, not reassignment.
// The `a` variable logged in line 11 is the outer scope `a` so "outer" is logged.
// On line 12, `testScope` is invoked which logs the value of the `a` variable in the scope of `testScope` so "inner" is logged.
// On line 13, "outer" is once again logged because `a` is referring to the outer scope `a` variable.