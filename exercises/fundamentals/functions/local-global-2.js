// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();  // This is local

// `someFunction` declares a local variable `myVar` and assigns it the value of "This is local".
// When the value of `myVar` is logged on line 8, Javascript looks in the local scope first for
// a variable named `myVar` and, when it finds it in the function, it logs the value which is "this is local"