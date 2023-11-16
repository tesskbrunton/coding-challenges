// Description:

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
  if (arr.length === 0) {
    return [];
  }

  let newArray = arr.sort(function (a, b) {
    return b - a;
  });

  let finalArray = [newArray[0]];
  let secondHighest = 0;

  newArray.forEach((num) => {
    if (num !== newArray[0] && num > secondHighest) {
      secondHighest = num;
      finalArray.push(num);
    }
  });

  return finalArray;
}