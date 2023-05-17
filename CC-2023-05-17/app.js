// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.
// Example:

// Input:

// > 6

// Output:

//     0+1+2+3+4+5+6 = 21

// Input:

// > -15

// Output:

//     -15<0

// Input:

// > 0

// Output:

//     0=0

function countToNum(num) {
  let string = '';
  let total = 0;
  if (num < 0) {
    return `${num}<0`;
  } else if (num === 0) {
    return `${num}=0`;
  } else {
    for (let i = 0; i <= num; i++) {
      if (i === num) {
        total += i;
        string += i + ' = ' + total;
      } else {
        string += i + '+';
        total += i;
      }
    }
  }
  return string;
}