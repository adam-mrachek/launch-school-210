var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);

// 4
// The `var` declaration in the for loop is hoisted to the global scope and is then reassigned several times in the for loop
// until the for loop finishes with an index of 4 which is returned on line 7.
