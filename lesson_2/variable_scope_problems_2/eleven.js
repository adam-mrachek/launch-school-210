let a = 'outer';

console.log(a);  // outer
setScope();      // Error
console.log(a);  // never executed because of error

var setScope = function () {
  a = 'inner';
};

// Because of hoisting, `var setScope;` is declared at the top of this code,
// but it is not assigned a value (the `setScope` function in this case) until line 7
// which causes the error since it has not been assigned a function when its invoked on line 4.
// Unlike function declarations where the name and body are hoisted, with function expressions using `var`,
// the name of the function is hoisted, but not the function body.