var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope());  // supernested
console.log(a);             // global

// In this code, we have three `a` variables with different scope:
// - a globally scoped `a` from line 1
// - one scoped to the `checkScope` function
// - and one scoped to the `nested` function
// When `superNested` is called on line 12, it assigns "superNested" to the `a` variable declared in `nested`.
// The return value of `checkScope` is the return value of `nested` which is the return value of `superNested` which will always be "superNested"
// The `a` variables declared inside of `checkScope` are not available in the global scope - only `a` from line 1 is available to console.log on line 19.