// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.
// Example

// text before = "abc"
// character   = "z"
// text after  = "zzz"

function contamination(text, char) {
  if (text.length === 0 || char.length === 0) return '';
  let array = [];
  for (let i = 1; i <= text.length; i++) {
    array.push(char);
  }
  return array.join('');
}