// Description:

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
// Examples

// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

function squares(x, n) {
  if(n <= 0) return []
let finalArray = [x];
let count = 1;
let xIncrement = x;
while (count < n) {
  count++;
  xIncrement *= xIncrement;
  finalArray.push(xIncrement);
}
return finalArray;
}
