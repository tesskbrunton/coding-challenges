// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  
const array = message.split('')
let newArray = []
const alphabet = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13,
  N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26, a: 27, b: 28, c: 29, d: 30, e: 31, f: 32, g: 33, h: 34, i: 35, j: 36, k: 37, l: 38, m: 39, n: 40, o: 41, p: 42, q: 43, r: 44, s: 45, t: 46, u: 47, v: 48, w: 49, x: 50, y: 51, z: 52
  }


//loop through word array checking letters
for(let i = 0; i < array.length; i++){
  const letter = array[i]
  const num = alphabet[letter];
  let cipherNum = 0
  const alphabetArray = Object.keys(alphabet)

//Check whether element passed in is a letter
  if (alphabetArray.includes(letter)){

//If it is, calculate it's cipher number
    if (num <= 26) {
      cipherNum = num + 13;
      if (cipherNum > 26) cipherNum -= 26;
    } else {
      cipherNum = num + 13;
      if (cipherNum > 52) cipherNum -= 26;
    }
//And then determine the cipher number's corresponding letter and put it in the new array
  for (let key in alphabet) {
    if (alphabet[key] === cipherNum) {
      if (letter === letter.toUpperCase()) {
        newArray.push(key.toUpperCase());
      } else {
        newArray.push(key);}
      }}}else{
  //If the element passed into the loop is not a letter, put it in the new array
        newArray.push(letter)
      }
    }

return newArray.join('')
}