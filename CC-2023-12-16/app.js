// Description:

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value) {
  const valString = String(value);
  const paddedNum = '00000';
  const newPaddedNum = paddedNum.slice(0, 5 - valString.length);
  return `Value is ${newPaddedNum + valString}`;
}