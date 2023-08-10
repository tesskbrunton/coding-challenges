// Create a function that takes in an array of numbers
// Alert the sum of the second lowest and the second highest number

function sumSecondLowAndHigh(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const sum = sortedArr[1] + sortedArr[sortedArr.length - 2];
  return sum;
}