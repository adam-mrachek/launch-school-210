// Write a function named `objectHasProperty` that takes two arguments: an Object and a String. 
// The function should return true if the Object contains a property with the name given by the String, false otherwise.

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

function objectHasProperty(object, prop) {
  if (object[prop] !== undefined) {
    return true;
  } else {
    return false;
  }
}

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true