const countPrefixes = (words, s) => {
  let count = 0;
  for (const word of words) {
    if (s.startsWith(word[0])) {
      count++;
    }
  }
  return count;
};

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
