// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);  // This is global

// There are two separate `myVar` variables each with different scope.
// `myVar` declared on line 4 is globally scoped and available everywhere in this program.
// `myVar` declared on line 7 is function-scoped and only available inside of `someFunction`.
//  The `myVar` logged on line 11 is the global myVar with value of "This is global"