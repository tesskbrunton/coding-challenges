// Description:

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  let sum = x.reduce((accumulator, current) => Number(accumulator) + Number(current));
  return Number(sum);
}