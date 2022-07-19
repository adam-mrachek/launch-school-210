function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

// hello
// ReferenceError
// `var a;` is hoisted to the top of `hello` because it is function scoped.
// Then it is assigned a value of 'hello' which is logged.
// Since `a` is scoped to the function, it is not available to console.log in line 11 so we get a ReferenceError.