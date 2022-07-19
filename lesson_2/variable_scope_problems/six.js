console.log(a);

var a = 1;

// undefined
// When variables declared with `var` are hoisted, they are assigned a value of `undefined`.
// When console.log is called on line 1, `a` has been declared, but not yet assigned a value until line 3 so `undefined` is logged.
// This behavior where a `var` variable is declared during hoisting and assigned a value of `undefined` is known as the Temporal Dead Zone.