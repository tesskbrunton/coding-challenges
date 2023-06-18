// Description:

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  let nonStringNum = 0;
  let stringNum = 0;
  for (let i = 0; i < x.length; i++) {
    const element = x[i];
    if (typeof element !== 'number') {
      stringNum += Number(element);
    } else {
      nonStringNum += element;
    }
  }
  return nonStringNum - stringNum;
}