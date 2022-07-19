// Predict the output of the following programs, and explain why they output what they do.

function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

// undefined
// `a` is declared on line 5, but is never assigned a value because the conditional block never executes.
// Another note: because `var` variables have a function scope, the `var` declaration is hoisted
// to the top of the function (ie. before the if block) and then the assignment takes place in the block:

function say() {
  var a;
  if (false) {
    a = 'hello from inside a block';
  }

  console.log(a);
}

// But again, `a` is never assigned a value since the block is not executed.