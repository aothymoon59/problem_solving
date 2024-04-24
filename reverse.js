// const reverse = (x) => {
//   const INT_MAX = 2 ** 31 - 1;
//   const INT_MIN = -(2 ** 31);

//   let newStr = x.toString();
//   let res = "";
//   let isNegative = x < 0;

//   if (isNegative) {
//     newStr = newStr.slice(1);
//     res = -res;
//     if (res < INT_MIN) {
//       return 0;
//     }
//   }

//   for (let i = newStr.length - 1; i >= 0; i--) {
//     res += newStr[i];

//     if (res > Math.floor(INT_MAX / 10) || res == Math.floor(INT_MAX / 10)) {
//       return 0;
//     }
//   }

//   return res;
// };

/* const reverse = (x) => {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  let isNegative = x < 0;
  let newStr = Math.abs(x).toString();

  let resStr = "";

  for (let i = newStr.length - 1; i >= 0; i--) {
    resStr += newStr[i];
  }

  let res = parseInt(resStr);
  if (isNegative) res = -res;

  if (res > INT_MAX || res < INT_MIN) return 0;

  return res;
}; */

const reverse = (x) => {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  let isNegative = x < 0;
  let resStr = Math.abs(x).toString().split("").reverse().join("");

  let res = parseInt(resStr);
  if (isNegative) res = -res;

  if (res > INT_MAX || res < INT_MIN) return 0;

  return res;
};

console.log(reverse(123));
