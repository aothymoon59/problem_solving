const reversePrefix = (word, ch) => {
  const ind = word.indexOf(ch);
  return (reverseChar =
    word
      .substring(0, ind + 1)
      .split("")
      .reverse()
      .join("") + word.slice(ind + 1));
};

console.log(reversePrefix("abcdefd", "d"));
