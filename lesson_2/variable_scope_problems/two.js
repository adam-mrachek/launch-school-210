// Please predict the output of the following programs, and explain why they output what they do.

let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);  // => outer
testScope();     // => inner
console.log(a);  // => inner

// In the first invocation of `console.log`, `a` is the global variable from line 23 so 'outer' is logged.
// When `testScope` is invoked on line 31, "inner" is assigned to the global variable `a` and then "inner" is logged.
// Since a new value was assigned to `a` in `testScope`, `console.log` on line 32 logs "inner".