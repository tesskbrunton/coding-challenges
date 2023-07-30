// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < a.length; i++) {
    const letter = String.fromCharCode(a[i]);
    console.log(letter);
    if (vowels.includes(letter)) {
      a[i] = letter;
    }
  }
  return a;
}