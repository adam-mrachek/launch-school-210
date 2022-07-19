// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

var myVar = 'This is global'

function someFunction() {
  console.log(myVar);
}

someFunction();  // This is global

// When the value of `myVar` is logged on line 7, JS looks in the scope hierarchy
// for a declared variable named `myVar`. When it doesn't find it locally, it goes
// up to the next outer scope which, in this case, is the global scope where `myVar`
// was declared and whose value is "This is global".