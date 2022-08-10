// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards.
// For this problem, the case matters and all characters matter.

function reverseString(string) {
  let reversed = "";
  const chars = string.split("");

  for (let i = 1; i <= string.length; i += 1) {
    reversed += chars.pop();
  }

  return reversed;
}

function isPalindrome(string) {
  const reversed = reverseString(string);

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== reversed[i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("Madam")); // false (case matters)
console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
console.log(isPalindrome("356653")); // true
