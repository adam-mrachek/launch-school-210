let greetPeople = () => console.log("Good morning!");

greetPeople();

// One interesting property of arrow functions is implicit returns:

let add = (a, b) => a + b;
console.log(add(3, 4));
// Not the lack of `return` statement. It can be omitted in arrow functions
// when and only when the function body contains a single expression.
// The expression may have subexpressions, but the entire expression must evaluate to a single value.