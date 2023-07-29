// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

function uniTotal(string) {
  const array = string.split('');
  if (string.length === 0) {
    return 0;
  }

  const sum = array.reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return sum;
}