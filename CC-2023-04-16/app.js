// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(string) {
  const array = string.toLowerCase()
                      .split('')
  let newArray = []
  let finalArray = []
  for(let i = 0; i < array.length; i++){
      const letter = array[i]
    
    for(let j = 0; j < i + 1; j++){
      if(j === 0){
        newArray.push(letter.toUpperCase())
      }else{
        newArray.push(letter)
      }} 

    if(i === array.length - 1){
      continue
    }else{newArray.push('-')}
    
  }
  return newArray.join('')
}
