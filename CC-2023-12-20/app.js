// Description:

// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"

// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

function makeString(s) {
  const stringArray = s.split(' ');
  let finalArray = [];
  stringArray.forEach((word) => finalArray.push(word[0]));
  return finalArray.join('');
}
