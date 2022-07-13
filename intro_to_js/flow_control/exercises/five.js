// Refactor this statement to an `if` statement:

return foo() ? 'bar' : qux();

// Solution:

if (foo()) {
  return 'bar'
} else {
  return qux();
}