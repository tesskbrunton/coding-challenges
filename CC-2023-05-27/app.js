// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
  const array = str.split(' ');
  const reversed = array.reverse();
  return reversed.join(' ');
}
