// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  let newObj = {};

  arr.forEach((num) => {
    newObj[num] ? newObj[num]++ : (newObj[num] = 1);
  });

  let highestCount = 0;
  let highestNum = 0;

  for (let key in newObj) {
    if (newObj[key] === highestCount && key > highestNum) {
      highestNum = key;
    } else if (newObj[key] > highestCount) {
      highestCount = newObj[key];
      highestNum = key;
    }
  }
  return Number(highestNum);
}