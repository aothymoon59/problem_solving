const splitWordsBySeparator = (words, separator) => {
  let resArr = [];
  for (let i = 0; i < words.length; i++) {
    let splitWords = words[i].split(separator);
    for (let j = 0; j < splitWords.length; j++) {
      if (splitWords[j] !== "") {
        resArr.push(splitWords[j]);
      }
    }
  }
  return resArr;
};

console.log(splitWordsBySeparator(["|||"], "|"));
