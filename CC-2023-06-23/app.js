// Description:

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x) {
  const array = x.split('');
  let newArray = [];
  array.forEach((letter) => {
    if (letter === 'a') {
      newArray.push('b');
    } else if (letter === 'b') {
      newArray.push('a');
    } else {
      newArray.push('c');
    }
  });

  return newArray.join('');
}