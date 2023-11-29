// Description:

// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

function sumOfIntegersInString(s) {
  const array = s.split('');
  let stringInteger = '';
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (!isNaN(Number(array[i]))) {
      stringInteger += array[i];
      if (i === array.length - 1) {
        total += Number(stringInteger);
      }
    } else {
      total += Number(stringInteger);
      stringInteger = '';
    }
  }
  return total;
}