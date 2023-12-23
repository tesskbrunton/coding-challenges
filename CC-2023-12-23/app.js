// Description:

// Input:

//     a string strng
//     an array of strings arr

// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

//     a boolean true if all rotations of strng are included in arr
//     false otherwise

// Examples:

// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

function containAllRots(strng, arr) {
  const letterArr = strng.split('');
  let rotCount = 0;
  let currentWord = strng;

  for (let i = 0; i < letterArr.length; i++) {
    if (arr.includes(currentWord)) {
      rotCount++;
    }
    let rotArray = currentWord.split('');
    const firstLetter = rotArray.shift();
    rotArray.push(firstLetter);

    currentWord = rotArray.join('');
  }

  return rotCount === letterArr.length ? true : false;
}