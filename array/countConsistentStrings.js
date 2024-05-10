const countConsistentStrings = (allowed, words) => {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (!allowed.includes(word[j])) {
        count++;
        break;
      }
    }
  }
  return words.length - count;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
