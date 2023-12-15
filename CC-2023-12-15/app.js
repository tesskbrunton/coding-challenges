// Description:
// Definition

// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
// Task

// Given a number, Find if it is Disarium or not.

function disariumNumber(n) {
  const arrayNum = String(n).split('');
  let total = 0;
  console.log(arrayNum);
  for (let i = 0; i < arrayNum.length; i++) {
    total += Math.pow(arrayNum[i], i + 1);
  }
  console.log(total);
  return total === n ? 'Disarium !!' : 'Not !!';
}