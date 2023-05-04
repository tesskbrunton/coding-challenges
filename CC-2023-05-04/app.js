// Description:

// Remove all exclamation marks from the end of sentence.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"


function remove (string) {  
  let array = string.split('')
  let revisedString = string
  
  for(let i = 0; i < array.length; i++) {
  if(revisedString.slice(-1) === '!') {
  revisedString = revisedString.slice(0, -1)
  } else{
    continue
  } }
  
    return revisedString
    }