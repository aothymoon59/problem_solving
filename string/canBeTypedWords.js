const canBeTypedWords = (text, brokenLetters) => {
  let count = 0;
  const arr = text.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = 0; j < brokenLetters.length; j++) {
      if (arr[i].includes(brokenLetters[j])) {
        flag = false;
        break;
      }
    }
    if (flag) count++;
  }
  return count;
};

console.log(canBeTypedWords("hello world", "ad"));
