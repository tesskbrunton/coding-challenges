// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
// Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13


function mxdiflg(a1, a2) {
  let total = 0
  if(a1.length === 0 || a2.length === 0){
    return -1
  }
  
  for(let i = 0; i < a1.length; i++){
    const stringOne = a1[i]
    for(let j = 0; j < a2.length; j++){
      const stringTwo = a2[j]
      const stringDifference = stringOne.length - stringTwo.length
      if(Math.abs(stringDifference) > total){
        total = Math.abs(stringDifference)
      }
    }
  }
  return total
}