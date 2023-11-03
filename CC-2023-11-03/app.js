// Description:

// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.

let websites = [];

function addString(array) {
  let count = 1;
  while (count <= 1000) {
    count++;
    array.push('codewars');
  }
}

addString(websites);
