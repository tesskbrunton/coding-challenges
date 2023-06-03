// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s) {
  const array = s.split('');
  let arrayOne = [];
  let arrayTwo = [];
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    const letter = array[i];
    if (i === 0) {
      arrayOne.push(letter.toUpperCase());
      arrayTwo.push(letter);
    } else if (i % 2 === 0) {
      arrayOne.push(letter.toUpperCase());
      arrayTwo.push(letter);
    } else {
      arrayOne.push(letter);
      arrayTwo.push(letter.toUpperCase());
    }
  }
  finalArray.push(arrayOne.join(''), arrayTwo.join(''));
  return finalArray;
}

