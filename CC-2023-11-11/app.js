// Description:

// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.

// More examples in the test cases.

// Good luck!

function solve(s) {
  let array = s.split('');
  let uppercase = 0;
  let lowercase = 0;
  let number = 0;
  let specialChar = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 'A' && array[i] <= 'Z') {
      uppercase++;
    } else if (array[i] >= 'a' && array[i] <= 'z') {
      lowercase++;
    } else if (!isNaN(array[i])) {
      number++;
    } else {
      specialChar++;
    }
  }
  return [uppercase, lowercase, number, specialChar];
}