// Description:

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

function solve(s) {
  const array = s.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelString = [];
  let longest = 0;

  for (let i = 0; i < array.length; i++) {
    if (vowels.includes(array[i])) {
      vowelString.push(array[i]);
      if (vowelString.length > longest) {
        longest = vowelString.length;
      }
    } else {
      vowelString = [];
    }
  }
  return longest;
}