// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  let longestNum = '0';
  for (let i = 0; i < array.length; i++) {
    const num = String(array[i]);
    if (num.length > longestNum.length) {
      longestNum = num;
    } else {
      continue;
    }
  }
  return Number(longestNum);
}
