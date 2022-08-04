// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);  // this will log '678' 
console.log(myObject.prop2);   // this will log '456'

// The reason for this result is because the `const` variable `prop2` gets evaluated as a string when it's assigned as a property of `myObject` on line 11.
// So the key:value property in `myObject` for the `prop2` variable is `'456': '678'`
// On line 14, the dot notation refers to the `prop2` property key in `myObject`