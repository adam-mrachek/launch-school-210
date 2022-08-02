// What side effects are present for the `foo` function in the following code?

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

// The `qux` array is mutated inside foo when `pop()` is called on the argument referencing the `qux` array
// The `console.log` is a side effect.