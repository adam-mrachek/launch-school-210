// Rewrite the following code using classic JavaScript syntax:

function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let { baz, qux, bar } = foo(1, 2, 3);

// Rewrite

let baz = foo[0];
let qux = foo[1];
let bar = foo[2];