// Is the string uppercase?
// Task

// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

function isUpperCase(string) {
  let upperCaseOnly = true;
  const array = string.split('');
  for (let i = 0; i < array.length; i++) {
    const charCode = string.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      upperCaseOnly = false;
    }
  }
  return upperCaseOnly;
}