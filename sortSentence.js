const sortSentence = (s) => {
  let arr = s.split(" ");
  let newArr = [];
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split("").reverse().join(""));
    newArr.sort();
  }
  for (let j = 0; j < newArr.length; j++) {
    resArr.push(newArr[j].split("").reverse().slice(0, -1).join(""));
  }
  return resArr.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
