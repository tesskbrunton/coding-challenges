// Description:

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  let NaNInArr = false;
  let sumOfOdd = 0;

  arr.forEach((num) => {
    if (typeof num === 'number' && !isNaN(num)) {
      const cubed = num * num * num;
      if (cubed % 2 !== 0) {
        sumOfOdd += cubed;
      }
    } else {
      NaNInArr = true;
    }
  });