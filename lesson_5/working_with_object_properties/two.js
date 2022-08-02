// Write a function named `incrementProperty` that takes two arguments: an Object and a String. 
// If the Object contains a property with the specified name, the function should increment the value of that property. 
// If the property does not exist, the function should add a new property with a value of 1. 
// The function should return the new value of the property.

let wins = {
  steve: 3,
  susie: 4,
};

function incrementProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    obj[prop] += 1;
  } else {
    obj[prop] = 1;
  }

  return obj[prop];
}

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }