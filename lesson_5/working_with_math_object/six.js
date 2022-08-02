// Math.random returns a random floating-point number between 0 and 1, excluding the exact value of 1. 
// This isn't helpful on its own, since you usually want a random integer between two other integer values. 
// Create a function that takes two arguments, a minimum and a maximum value, and returns a random integer between those numbers (including both of the numbers). 
// Your solution should handle the scenario that the user inadvertently swaps the positions of the min and max values or the scenario that the min and max values are equal. 
// You may assume that the user always provides the min and max values.

function randomNumber(min, max) {
  if (min === max) {
    return min;
  }

  if (min > max) {
    let tempMin = min;
    min = max;
    max = tempMin;
  }

  return Math.floor(Math.random() * (max - min)) + min;
}