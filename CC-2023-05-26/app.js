// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
  let array = string.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newWord = [];

  for (let i = 0; i < array.length; i++) {
    let letter = array[i];

    if (vowels.includes(letter)) {
      newWord.push(vowels.indexOf(letter) + 1);
    } else {
      newWord.push(letter);
    }
  }

  return newWord.join('');
}

function decode(string) {
  let array = string.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let letter = array[i];

    if (Number.isInteger(Number(letter))) {
      let vowelIndex = Number(letter) - 1;
      newArray.push(vowels[vowelIndex]);
    } else {
      newArray.push(letter);
    }
  }
  return newArray.join('');
}
