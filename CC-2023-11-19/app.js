// Description:

// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
// The task

// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.
// Examples

//     7 ==> return "Balanced"

//     Explanation:

//     middle digit(s): 7
//     sum of all digits to the left of the middle digit(s) -> 0
//     sum of all digits to the right of the middle digit(s) -> 0
//     0 and 0 are equal, so it's balanced.

//     295591 ==> return "Not Balanced"

//     Explanation:

//     middle digit(s): 55
//     sum of all digits to the left of the middle digit(s) -> 11
//     sum of all digits to the right of the middle digit(s) -> 10
//     11 and 10 are not equal, so it's not balanced.

//     959 ==> return "Balanced"

//     Explanation:

//     middle digit(s): 5
//     sum of all digits to the left of the middle digit(s) -> 9
//     sum of all digits to the right of the middle digit(s) -> 9
//     9 and 9 are equal, so it's balanced.

//     27102983 ==> return "Not Balanced"

//     Explanation:

//     middle digit(s): 02
//     sum of all digits to the left of the middle digit(s) -> 10
//     sum of all digits to the right of the middle digit(s) -> 20
//     10 and 20 are not equal, so it's not balanced.

function balancedNum(number) {
  let stringNum = String(number);
  let midIndex = 0;
  let leftSide = 0;
  let rightSide = 0;

  if (stringNum.length % 2 === 0) {
    midIndex = stringNum.length / 2 - 1;
    leftSide = stringNum.slice(0, midIndex);
    rightSide = stringNum.slice(midIndex + 2, stringNum.length);
  } else {
    midIndex = stringNum.length / 2;
    leftSide = stringNum.slice(0, midIndex);
    rightSide = stringNum.slice(midIndex + 1, stringNum.length);
  }

  let leftArray = leftSide.split('');
  let rightArray = rightSide.split('');

  let leftTotal = leftArray.reduce((acc, currValue) => acc + Number(currValue), 0);
  let rightTotal = rightArray.reduce((acc, currValue) => acc + Number(currValue), 0);

  return leftTotal === rightTotal ? 'Balanced' : 'Not Balanced';

}
