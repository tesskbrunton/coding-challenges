// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// Try to do it without using if statements!

function arithmetic(a, b, operator) {
  let operators = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',
  };

  return eval(a + operators[operator] + b);
}