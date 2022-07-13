// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

// It logs `hi` and `hello`.
// The reason is because objects are mutable and primitives are not.
// Also, line 12 is variable reassignment. It reassigns `argument2` variable
// but it doesn't mutate the string represented by `qux` which is why line 18 logs the original value of `qux`
// Line 11 mutates `foo` by assiging the `a` property to a new value, `hi`.