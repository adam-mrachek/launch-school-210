// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

logValue();  // hello, world!

function logValue() {
  console.log("hello, world!");
}

// During the creation phase, function declarations (both the name and body) are hoisted to the top of the scope
// so the function can be called even before its declared.