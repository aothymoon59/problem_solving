/* const mostWordsFound = (sentences) => {
  let countArr = [];
  for (let i = 0; i < sentences.length; i++) {
    countArr.push(sentences[i].split(" ").length);
  }
  return Math.max(...countArr);
}; */

const mostWordsFound = (sentences) => {
  let maxNum = 0;
  for (let i = 0; i < sentences.length; i++) {
    let strLength = sentences[i].split(" ").length;
    if (strLength > maxNum) {
      maxNum = strLength;
    }
  }
  return maxNum;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
