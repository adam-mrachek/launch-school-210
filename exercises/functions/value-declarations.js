// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

console.log(a);

var a = 1; // undefined

// During the creation phase, `var = a;` is hoisted to the top of the scope, but the assignment is not
// so `a` has a value of `undefined` when console.log is called on line 4.
// The value of 1 isn't assigned to `a` until after console.log.