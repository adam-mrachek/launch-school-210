let person = {
  name: 'Bob',
  age: '30',
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}

// => Bob
//    30
//    6 ft

// One feature, or downside, of `for/in` is that it iterates over the properties of an object's prototypes as well:

let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}

// => 3
//    4
//    1
//    2

// The first two items output by the above code are the "own properties" of `obj2`. 
// The last two properties are the properties of the prototype object (obj1)

// If you want to limit iteration to an object's own properties, you can use `hasOwnProperty`
// to get around the problem of `for/in`

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
}

// => 3
//    4