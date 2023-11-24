// Description:

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

function switcher(x) {
  let finalArray = [];
  for (let i = 0; i < x.length; i++) {
    const num = Number(x[i]);
    if (num > 26) {
      if (num === 27) finalArray.push('!');
      if (num === 28) finalArray.push('?');
      if (num === 29) finalArray.push(' ');
    } else {
      const charCode = 65 + (26 - num);
      const letter = String.fromCharCode(charCode);
      finalArray.push(letter);
    }
  }
  return finalArray.join('').toLowerCase();
}