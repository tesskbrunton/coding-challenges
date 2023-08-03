// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []
// Examples

// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

function first(arr, n) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (n === 0) {
      break;
    } else if (n === undefined) {
      newArray.push(arr[0]);
      break;
    } else if (i < n) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
