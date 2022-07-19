// How do var and let differ?
// Use the Node REPL for this example.
// Type the commands one at a time - don't use copy and paste.

// var bar = 42;
// console.log(global.bar);
// bar += 1;
// console.log(global.bar);

var hello;

console.log(hello());    // raises "TypeError: hello is not a function"

hello = function () {
  return 'hello world';
};