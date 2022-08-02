// Write a function named `copyProperties` that takes two Objects as arguments. 
// The function should copy all properties from the first object to the second. 
// The function should return the number of properties copied.

let hal = {
  model: 9000,
  enabled: true,
};

function copyProperties(obj1, obj2) {
  let propsCopied = 0;

  for (let prop in obj1) {
    obj2[prop] = obj1[prop];
    propsCopied += 1;
  }

  return propsCopied;
}

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }