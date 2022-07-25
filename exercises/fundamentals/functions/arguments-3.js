// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);  // [1, 2, 10]

// Arrays and objects are mutable in Javascript. When the value assigned to `a` (an array), is passed
// to the function on line 7, a local variable `b` is initialized to the same array that `a` is assigned.
// So when the program executes the statement `b[2] += 7`, it is being executed on the array assigned to `a`
// which results in the value logged on line 11.