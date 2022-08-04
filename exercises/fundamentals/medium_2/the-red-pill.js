// Read through the code below and determine what will be logged.
// You may refer to the ASCII Table to look up character code values.

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = "";
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // logs "Welcome"
    anotherOne(116, 111); // from line 15, logs: "to"
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101); // from line 15: logs: "the"
  return anotherOne; // returns the `anotherOne` function
}

one()(77, 97, 116, 114, 105, 120, 33); // the second series of parentheses is calling the returned `anotherOne` function
// logs: "Matrix!"
