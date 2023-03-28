// Given a string str, reverse it and omit all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string

function reverseLetter(str) {
  let array = str.split('')
                  .reverse()
  let newArray = [] 
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < alphabet.length; j++){
        if(array[i] === alphabet[j]){
          newArray.push(alphabet[j])
        }
      }
    }
    return newArray.join('')
}
