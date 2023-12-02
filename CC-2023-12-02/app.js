function capitalize(s, arr) {
  const textArray = s.split('');
  let finalArray = [];
  for (let i = 0; i < textArray.length; i++) {
    if (arr.includes(i)) {
      finalArray.push(textArray[i].toUpperCase());
    } else finalArray.push(textArray[i]);
  }
  return finalArray.join('');
}