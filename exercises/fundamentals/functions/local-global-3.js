// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);  // This is local

// On line 4, `myVar` is declared and is globally scoped.
// When `someFunction` is invoked, 'This is local` is assigned to the global `myVar` variable
// changing its value which is logged on line 11.