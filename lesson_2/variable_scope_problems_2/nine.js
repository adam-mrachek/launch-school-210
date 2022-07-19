let a = 'outer';
let b = 'outer';

console.log(a);  // outer
console.log(b);  // outer
setScope(a);     // undefined
console.log(a);  // outer
console.log(b);  // inner

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

// The first three are straightforward.
// For line 7, `a` is never assigned a new value. It is passed in as an argument to `setScope`, but `setScope` creates its own local variable `foo` to represent that value.
// For line 8, the outer scope `b` variable is accessible and is assigned a new value ("inner") when `setScope` was called on line 6 which is then logged on line 8