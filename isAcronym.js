const isAcronym = function (words, s) {
  let firstChars = "";
  for (let word of words) {
    firstChars += word[0];
  }
  return firstChars === s;
};

console.log(isAcronym(["an", "apple"], "a"));
