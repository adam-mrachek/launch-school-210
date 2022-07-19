var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);

// hello
// On line 7, the `a` variable declared and assigned on line 1 is what is being logged since it has a global scope.
// The `a` variable declared by the `let` statement in the for loop is block-scoped and is not available outside the block.