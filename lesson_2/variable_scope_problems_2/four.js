function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);

// hello
// hello
// Other than `let a;` in the `if` clause, no `a` variable is declared
// Since JS does not find any declaration of `a` after finding the assignment on line 2, it adds `a` to the global object
// so it is treated as a global variable. `hello` is logged from line 3 and again from line 11.