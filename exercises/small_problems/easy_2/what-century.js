// Write a function that takes a year as input and returns the century.
//The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

function centuriesWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

function getEnding(number) {
  let lastDigit = number % 10;

  if (centuriesWithTh(number % 100)) {
    return 'th';
  } else if (lastDigit === 1) {
    return 'st';
  } else if (lastDigit === 2) {
    return 'nd'
  } else if (lastDigit === 3) {
    return 'rd'
  } else {
    return 'th'
  }
}

function century(year) {
  let century;

  if (year % 100 === 0) {
    century = year / 100;
  } else {
    century = Math.round(year / 100) + 1;
  }

  let ending = getEnding(century);
  console.log(String(century) + ending);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
