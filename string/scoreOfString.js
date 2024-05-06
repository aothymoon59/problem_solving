// Method 1
// const scoreOfString = (s) => {
//   let sum = 0;
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s.charCodeAt(i) > s.charCodeAt(i + 1)) {
//       sum += s.charCodeAt(i) - s.charCodeAt(i + 1);
//     } else {
//       sum += s.charCodeAt(i + 1) - s.charCodeAt(i);
//     }
//   }
//   return sum;
// };

// Method 2
const scoreOfString = (s) => {
  let sum = 0;
  for (let i = 0; i < s.length - 1; i++) {
    let x = s.charCodeAt(i) - s.charCodeAt(i + 1);
    if (x >= 0) {
      sum += x;
    } else {
      sum -= x;
    }
  }
  return sum;
};

console.log(scoreOfString("hello"));
