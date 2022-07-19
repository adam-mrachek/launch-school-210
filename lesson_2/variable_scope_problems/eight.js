console.log(a);

function hello() {
  a = 1;
}

// ReferenceError: `a` is not defined
// `hello` is declared, but is it never invoked so a value is never assigned to `a`. And since `a` is not declared anywhere,
// it produces a ReferenceError.