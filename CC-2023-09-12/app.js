// const twoDimensionalArray = [
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 2, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
// ];

// Take this two dimensional array and create a funtion that when you pass it 'rightArrow', the number 2 become a 1 and the 1 to its right becomes a two. Essentially move the 2 to the right. If you run the function twice it should move the 2 two spaces to the right and so on. The commands that the function can take are 'rightArrow', 'leftArrow', 'upArrow', and 'downArrow'. The function will just console.log the updated 2D array.

function game(direction) {
  let twoDimensionalArray = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  if (direction === 'right arrow') {
    for (let i = 0; i < twoDimensionalArray.length; i++) {
      const targetArray = twoDimensionalArray[i];
      if (targetArray.includes(2)) {
        let twoIndex = targetArray.indexOf(2);
        targetArray[twoIndex] = 1;
        targetArray[twoIndex + 1] = 2;
      }
    }
  }
  console.log(twoDimensionalArray);
}