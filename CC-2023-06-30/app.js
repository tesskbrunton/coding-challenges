// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const array = s.split('');
  let finalArray = [];

  for (let i = 0; i < array.length; i++) {
    if (digits.includes(array[i])) {
      finalArray.push(array[i]);
    }
  }
  const result = finalArray.join('');
  return Number(result);
}