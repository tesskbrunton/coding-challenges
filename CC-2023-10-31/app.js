// Description:

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
  const array = s.split('');
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    array[i] === array[i].toLowerCase() ? newArray.push(array[i].toUpperCase()) : newArray.push(array[i].toLowerCase());
  }
  return newArray.join('');
}
