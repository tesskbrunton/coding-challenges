// Task

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
// Notes

//     Array/list size is at least 2.

//     Array/list numbers could be a mixture of positives, negatives also zeroes .

function adjacentElementsProduct(array) {
  let highestProduct = array[0] * array[1];

  for (let i = 0; i < array.length; i++) {
    const currentProduct = array[i] * array[i + 1];

    if (currentProduct > highestProduct) {
      highestProduct = currentProduct;
    }
  }
  return highestProduct;
}