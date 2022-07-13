let array = [1, 2, 3];

array.forEach(function(num) {  // This forEach is a function expression and uses a callback function
  console.log(num);
});

array.forEach(num => console.log(num));  // This forEach uses an arrow function which is a bit more compact
