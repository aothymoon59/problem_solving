const findWordsContaining = (words, x) => {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }
  return result;
};

console.log(findWordsContaining(["leet", "cod", "leetcode"], "e"));
