const prefixCount = (words, pref) => {
  let count = 0;
  for (const word of words) {
    if (word.startsWith(pref)) {
      count++;
    }
  }
  return count;
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
