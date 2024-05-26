const lengthOfLastWord = (s) => {
  let sentence = s.trim();
  let arr = sentence.split(" ");
  return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));
