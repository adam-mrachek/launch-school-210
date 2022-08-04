// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  const status = "debugging";
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// When the `logger` function is invoked on line 9, it logs the variable `status`
// Javascript uses lexical scoping so it starts looking for the `status` variable declaration
// in the current scope and, if it doesn't find it there, it moves up the hierarchy to the next scope
// until it finds it. In this case, the status variable was declared in the scope of the `debugIt` function
// and, since it's in an outer scope, it's available insinde `logger`
