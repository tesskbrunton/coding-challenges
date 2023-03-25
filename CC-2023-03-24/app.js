// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
  const stringArr = str.split(' ')
  let reverseStringArr = []
for(let i = 0; i < stringArr.length; i++){
  let reverseWord = stringArr[i].split('').reverse().join('')
  reverseStringArr.push(reverseWord)
}
  return reverseStringArr.join(' ')
}
