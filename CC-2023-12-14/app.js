
// Your task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

//     If the input is 'H', return 'Hello World!'
//     If the input is 'Q', return the input
//     If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ...
// ...
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

function HQ9(code) {
  if (code === 'H') {
    return 'Hello World!';
  } else if (code === 'Q') {
    return code;
  } else {
    let songLoop = '';
    for (let i = 99; i >= 1; i--) {
      songLoop += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i} bottles of beer on the wall.\n`;
    }
    songLoop += `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`;
    return songLoop;
  }
}
