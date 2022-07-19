// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a); // 7

// The value of `a` is passed in as an argument to `myValue` which accepts a paramater `a`.
// `myValue` creates a variable with the same name as the parameter,`a`, that is scoped to the function.
// So there are two `a` variables in this program with two different scopes: the global `a` declared on line 4
// and the locally scoped `a` in `myValue` representing the paramater value.
// The reassignment of `a` in `myValue` has not effect on the global `a`.