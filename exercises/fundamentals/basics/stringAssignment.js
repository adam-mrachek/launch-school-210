// Take the following code. What does this code log to the console? Think about it for a moment before continuing.

let name = 'Bob';
const saveName = name;
name = 'Alice';
console.log(name, saveName);

// It logs 'Alice Bob'

// Now let's look at something slightly different:

const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

// What does this code log? Can you explain these results?

// It logs 'Bob Bob'.
// Both `name` and `saveName` reference the value `Bob`. Because strings are immutable in Javascript, 
// the `toUppcaseCase()` method returns a _new_ string
// and does not change the value of the calling variable/string. So the values of `name` and `saveName`
// are unchanged when their values are logged. 