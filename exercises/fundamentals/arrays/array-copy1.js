// Read through the code shown below. What does it log to the console at lines 8 and 12?

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray); // [1, 2, 3] because myOtherArray is still referencing same array as myArray

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray); // [1, 2, 3] because myArray has been assigned to a new array, but this is still referencing the original
