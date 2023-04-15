// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

//     sz is <= 0 or if str is empty return ""
//     sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

// Examples:

// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"

// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

function revrot(str, size) {
  
 // Below if size is <= 0, greater than the length of str, or if str is empty return ''

  if (size <= 0 || size > str.length || str === ''){
    return ''
  } 
  
// Below string is cut into chunks of size (ignore the last chunk if its size is less than sz).

  const numArray = str.split('')    
  let newArray = []
  let counter = 0

  for(let i = 0; i < numArray.length; i += size){
    const newString = str.slice(counter, counter + size)
    if(newString.length < size){
      continue
    }else{
      newArray.push(newString)
      counter += size
    }
  }

  // Below compares sum of the cubes of each chunk's digits, divisible by 2. If the chunk sum is divisible by 2, the chunk is reversed; otherwise rotate it to the left by one position.
  
    let finalArray = []
  
  for(let i = 0; i < newArray.length; i++){
    let cubedNumTotal = 0
    let splitArray = (newArray[i].split(''))
          splitArray.forEach(numbers => {
      const val = parseInt(numbers, 10);
      cubedNumTotal += (val * val * val)
    })
    if(cubedNumTotal % 2 === 0){
      const reverseArray = splitArray.reverse()
      finalArray.push(reverseArray.join(''))
    }else{
      const slicedLetter = splitArray.shift()
      splitArray.push(slicedLetter)
      finalArray.push(splitArray.join(''))
    }
  }

  //Modified chunks joined and returned as a string.
  
  return finalArray.join('')

  }