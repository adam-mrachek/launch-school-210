console.log(a);

let a = 1;

// ReferenceError: Can't access `a` before initialization
// When variables declared with `let` are hoisted, they are not assigned a value at all. They are in an "unset" or "not defined" state.
// So we get the ReferenceError on line 1 because `a` isn't assigned a value until line 3.