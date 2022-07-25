// var foo = 1;
// function bar() {
//   var foo = 2;
//   var qux = 5;
//   return qux;
// }

// function foo() {}
// bar();

// console.log(foo);
// console.log(qux);
// console.log(bar);

console.log(foo());

function foo() {
  console.log('Waiting for bar!');
}

function foo() {
  console.log(foo);
  function bar() {
    console.log('bar again');
  }

  bar();

  function bar() {
    console.log('bar again and again');
  }
}