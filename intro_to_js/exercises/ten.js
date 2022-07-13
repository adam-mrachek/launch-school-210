// Consider this code:

let x = "5"
x = x + 1
//= "51"

// Now consider this code:

let y = '5'
console.log(y++)

// What gets returned by y++ in the second snippet, and why?

// The return value is numeric value 5.
// When `++` is applied to a string, JS coerces it into a number.
// In this case, "5" get coerced into the number 5 and is then incremented to 6.
// However, the return value is 5 because the post-increment operator (y++)
// returns the original value of `y`, not the incremented value.