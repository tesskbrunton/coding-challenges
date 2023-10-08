function correctPolishLetters(string) {
  const obj = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
  };
  const array = string.split('');

  let finalArray = array.map((letter) => {
    for (let key in obj) {
      if (letter === key) {
        return obj[key];
      }
    }
    return letter;
  });
  return finalArray.join('');
}