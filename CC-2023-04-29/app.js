// Sum of Pairs

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]


function sumPairs(ints, s) {
  //Check array element sums and add integers that sum to s to object as arrays with second element's index number
     let newObj = {}
     for (let i = 0; i < ints.length; i++){
     const numOne = ints[i]
     for(let j = 0; j < ints.length; j++){
         const numTwo = ints[j]
     if(i < j && numOne + numTwo === s){
         newObj[i] = [numOne, numTwo, j]}
     }}
     //If no array elements sum s, return undefined
     if(Object.keys(newObj).length === 0){
         console.log(undefined)} else{

     //Check arrays in object for lowest second element index number. Put the integers from that array in newArray
     let indexCount = ints.length
     let newArray = []
     for (let key in newObj) {
         if(newObj[key][2] < indexCount){
             indexCount = newObj[key][2]
             newArray = []
             newArray.push(newObj[key][0], newObj[key][1])
         }}
     //Return new array
         console.log(newArray)}
     }

