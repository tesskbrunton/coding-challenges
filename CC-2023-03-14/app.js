
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



function solution(string) {
  let array = string.split('')
  let newArray = []
  for(let i = 0; i < array.length; i++){
    if(array[i] === array[i].toUpperCase()){
      newArray.push(' ')
      newArray.push(array[i])
    }else{
      newArray.push(array[i])
    }}
    return newArray.join('')
  }
  