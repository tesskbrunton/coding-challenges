// Description:

// Compare two strings by comparing the sum of their values (ASCII character code).

//     For comparing treat all letters as UpperCase
//     null/NULL/Nil/None should be treated as empty strings
//     If the string contains other characters than letters, treat the whole string as it would be empty

// Your method should return true, if the strings are equal and false if they are not equal.
// Examples:

// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

function compare(s1, s2) {
  const stringArr = [s1, s2];
  let sumArr = [];

  for (let i = 0; i < stringArr.length; i++) {
    //Check for null
    if (stringArr[i] === null) {
      stringArr[i] = '';
    }
    //Check for symbol
    const letterArr = stringArr[i].split('');
    for (let j = 0; j < letterArr.length; j++) {
      const charCode = letterArr[j].charCodeAt(0);
      if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        stringArr[i] = '';
      }
    }

    //Add empty string or sum to array
    if (stringArr[i] === '') {
      sumArr.push('');
    } else {
      const sum = letterArr.reduce((sum, currentVal) => sum + currentVal.toUpperCase().charCodeAt(0), 0);
      sumArr.push(sum);
    }
  }

  return sumArr[0] === sumArr[1] ? true : false;
}