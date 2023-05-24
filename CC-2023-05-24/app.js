// Description:

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
// Examples

// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

function remove(string) {
  const array = string.split('');
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const letter = array[i];
    if (letter !== '!' && i === array.length - 1) {
      newArray.push(`${letter}!`);
    } else if (letter === '!' && i === array.length - 1) {
      newArray.push(letter);
    } else if (letter !== '!') {
      newArray.push(letter);
    }
  }
  return newArray.join('');
}
