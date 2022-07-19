function hello() {
  let a = 'hello';
}

hello();
console.log(a);

// ReferenceError: a is not defined
// The `hello` function declares a local variable `a` and assigns it the value "hello".
// The `a` variable is scoped to the `hello` function so it is not available 
// in the outer global scope so we get an error on line 6.