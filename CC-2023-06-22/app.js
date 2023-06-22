// Description:

// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// function nearestSq(n) {
//   let sqrRootN = Math.sqrt(n)
//   let largestDifference = 0;
//   let squareRoot = 0;

//   if (!Number.isInteger(sqrRootN)) {

//     for (let i = 1; i < sqrRootN + 1; i++){
//             let square = i * i;
//             let difference = n - square;

//             if (Math.abs(difference) > largestDifference) {
//                 largestDifference = difference;
//                 squareRoot = i;

//     }}
//     console.log(squareRoot);}

//    else {
//     console.log(n);
//   }
// }

function nearestSq(n) {
  let sqrRootN = Math.sqrt(n);
  let largestDifference = 0;
  let squareRoot = 0;

  if (!Number.isInteger(sqrRootN)) {
    for (let i = 1; i <= sqrRootN + 1; i++) {
      let square = i * i;
      let difference = Math.abs(n - square);

      if (difference < largestDifference || largestDifference === 0) {
        largestDifference = difference;
        squareRoot = square;
      }
    }
    return squareRoot;
  } else {
    return n;
  }
}
