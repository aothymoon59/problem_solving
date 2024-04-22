// method 1
/* const sortSentence = (s) => {
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
}; */

// method 2
/* const sortSentence = (s) => {
  let arr = s.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i].substr(-1);
    newArr[element - 1] = arr[i].substr(0, arr[i].length - 1);
  }
  return newArr.join(" ");
}; */

// method 3
const sortSentence = (s) => {
  let arr = [];
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      arr.push(str);
      str = "";
    } else {
      str += s[i];
    }
  }
  arr.push(str);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i].substr(-1);
    newArr[element - 1] = arr[i].substr(0, arr[i].length - 1);
  }
  return newArr.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
