// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);  // This is global

// When `someFunction` is invoked on line 8, it attempts to assign "This is global" to
// a variable named `myVar`. Javascript first looks in the local scope for the declaration
// and keeps moving up the outer-scope hierarchy to try to find it. If JS doesn't find a declaration
// on the global scope, it adds the variable to the global object and the variable is treated
// as a global variable. So after `someFunction` is called, there is a global `myVar` variable
// with the value of 'This is global` which is logged on line 9.