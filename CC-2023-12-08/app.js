// Description:

// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

//     hello - english
//     ciao - italian
//     salut - french
//     hallo - german
//     hola - spanish
//     ahoj - czech republic
//     czesc - polish

function validateHello(greetings) {
  const multiLingual = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];

  const punctuation = ['.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}'];

  const greetingsArray = greetings.toLowerCase().split(' ');

  const removePunctuation = greetingsArray.map((word) => {
    const letterArray = word.split('');
    letterArray.forEach((letter, index, array) => {
      if (punctuation.includes(letter)) {
        array[index] = '';
      }
    });
    return letterArray.join('');
  });
  console.log(removePunctuation);
  const helloCheck = multiLingual.some((word) => removePunctuation.includes(word));

  return helloCheck;
}