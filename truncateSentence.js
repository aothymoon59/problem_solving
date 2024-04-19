// method 1
const truncateSentence = (s, k) => {
  let str = "";
  let arr = [];
  let res = "";

  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (s[i] == " ") {
      arr.push(str);
      str = "";
    } else {
      str += s[i];
    }
  }
  if (str != "") {
    arr.push(str);
  }

  for (let i = 0; i < k; i++) {
    res += arr[i] + " ";
  }
  return res.trim();
};

// method 2
// const truncateSentence = (s, k) => {
//   let arr = s.split(" ");
//   let res = "";
//   for (let i = 0; i < k; i++) {
//     res += arr[i] + " ";
//   }
//   return res.trim();
// };

console.log(truncateSentence("Hello how are you Contestant", 4));
