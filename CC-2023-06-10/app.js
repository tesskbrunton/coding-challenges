// Your task is simply to count the total number of lowercase letters in a string.
// Examples

// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

function lowercaseCount(str) {
  const array = str.split('');
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      counter++;
    }
  }
  return counter;
}