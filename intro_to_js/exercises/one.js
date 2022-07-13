// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// It logs `[1, 4, 3]` because the `array1` and `array2` variables reference the same array object.
// Line 5 does not reassign `array1` to a new array, it simply mutates the array object it's pointing to.
// Since there was no reassignment, `array1` and `array2` are still pointing at the same array
// so line 6 logs the value of the array which is `[1, 4, 3]` after the mutation on line 5.