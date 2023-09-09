// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(string) {
  const wordArray = string.split(' ');
  let letterArray = [];
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let obj = {};
  for (let i = 0; i < wordArray.length; i++) {
    letterArray = wordArray[i].split('');
    let sum = 0;
    for (let j = 0; j < letterArray.length; j++) {
      sum += alphabet.indexOf(letterArray[i]) + 1;
    }
    obj[wordArray[i]] = sum;
  }
  let highest = 0;
  let highestObj = '';
  for (let key in obj) {
    if (obj[key] > highest) {
      highest = obj[key];
      highestObj = key;
    }
  }
  return highestObj;
}