function hello() {
  a = 'hi';
}

hello();
console.log(a);

// hi
// When `hello` is invoked on line 5, the function assigned 'hi' to variable `a`.
// Javascript will look up the scope hierarchy for a declared `a` variable, but will not find one
// so it creates an 'a' variable with global scope which is logged on line 6.