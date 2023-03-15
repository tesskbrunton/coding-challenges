// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


function isIsogram(str){

  if (str.length === 0){
    return true
  }
  let array = str.toLowerCase()
                  .split('')
  let newObj = {}
  array.forEach(num => {
    newObj[num] ? newObj[num]++ : newObj[num] = 1;     
  })  
  for(let key in newObj){
      if(newObj[key] > 1){
        return false
      }
  }
  return true
  }
  
  isIsogram('moose')

  
  
  
  