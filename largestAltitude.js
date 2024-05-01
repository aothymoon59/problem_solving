// const largestAltitude = (gains) => {
//   let x = 0;
//   let resArr = [];
//   for (let i = 0; i < gains.length; i++) {
//     x += gains[i];
//     resArr.push(x);
//   }
//   return Math.max(0,...resArr);
// };

const largestAltitude = (gains) => {
  let x = 0;
  let y = 0;
  for (let i = 0; i < gains.length; i++) {
    x += gains[i];
    if (x > y) {
      y = x;
    }
  }
  return y;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
