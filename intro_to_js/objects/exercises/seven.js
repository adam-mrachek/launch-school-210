// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

// These two snippets will not produce the same output because `Object.keys()`
// only returns the keys of the object that called in `Object.keys()`, not the prototype object keys.
// The `for/in` method iterates through all of the object's keys, including the keys in the prototype object.