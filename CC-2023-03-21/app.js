// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let array = s.split(' ')
  array.sort(function(a, b){
  return a.length - b.length
})
  return(array[0].length)
}