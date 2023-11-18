// Description:

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples

// "312" should return "333122"

// "102269" should return "12222666666999999999"

function explode(s) {
  const array = s.split('');
  let numArray = [];
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    while (count < array[i]) {
      count++;
      numArray.push(array[i]);
    }
  }
  return numArray.join('');
}