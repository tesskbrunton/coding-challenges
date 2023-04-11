// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  let count = {}
  a.forEach(function(num) {
     count[num] ? count[num]++ : count[num] = 1;
  });
  
  let objArray = Object.keys(count)
  let finalArray = objArray.map(num => 
  Number(num)  
  )
  
  return finalArray  
}