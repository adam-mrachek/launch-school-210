let a = 1;

function foo() {
  a = 2;
  let bar = function() {
    a = 3;
    return 4;
  };

  return bar();
}

console.log(foo());  // 4
console.log(a);      // 3

// When `foo` is invoked on line 13, it assigns '2' to global variable `a` and then it assigns '3' to `a` when `bar` is invoked on line 10.
// The return value of `foo` is the return value of `bar` which is 4.
// Since `a` was assigned the value of 3 when we called `foo` (and, thus, `bar`), we get 3 on line 14.