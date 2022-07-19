function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();

// ReferenceError: `a` is not defined.
// `let` variables are block-scoped so `a` is only available inside the `if` block on line 3.
