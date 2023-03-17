// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"


function isAnagram (test, original) {
  if(test.length === 0 || original.length === 0){
    return false
  }
  let array1 = test.toLowerCase()
                    .split('')
  let array2 = original.toLowerCase()
                        .split('')
  let counterObj1 = {}
  let counterObj2 = {}
  array1.forEach(letter => {
    counterObj1[letter] ? counterObj1[letter]++ : counterObj1[letter] = 1;     
  })
  array2.forEach(letter => {
    counterObj2[letter] ? counterObj2[letter]++ : counterObj2[letter] = 1;     
  })

let sortedCount1 = Object.entries(counterObj1)


let sortedCount2 = Object.entries(counterObj2)

if (String(sortedCount1.sort()) === String(sortedCount2.sort())){
  return true
}else{
  return false
}

}

isAnagram ("fofet", "toffee")