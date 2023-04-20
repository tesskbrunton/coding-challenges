// In mathematics, the factorial of a non-negative integer n denoted by n!, is the product of all positive integers less than or equal to n. The factorial of n also equals the product of n with the next smaller factorial:
// n ! = n × ( n − 1 ) × ( n − 2 ) × ( n − 3 ) × ⋯ × 3 × 2 × 1 = n × ( n − 1 )!

// Your task is to write function factorial.

function factorial(n){
  if (n === 0){
    return 1}
  let total = n
  for(let i = 1; i < n; i++){
    total *= i
  }
  return total
}