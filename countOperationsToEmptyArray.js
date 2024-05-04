// const countOperationsToEmptyArray = (nums) => {
//   let sortedArr = [...nums].sort((a, b) => a - b);
//   let count = 0;
//   for (i = 0; i< 5; i++) {
//     if (sortedArr[0] == nums[0]) {
//       nums.shift();
//       sortedArr.shift();
//       count++;
//     } else {
//       nums.push(nums[0]);
//       nums.shift();
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countOperationsToEmptyArray([1, 2, 3, 4]));
const countOperationsToEmptyArray = (nums) => {
  let sortedArr = [...nums].sort((a, b) => a - b);
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    if (sortedArr[i] != nums[i]) {
      nums.push(nums[i]);
      nums.splice(i, 1);
      count++;
      i--;
    }
  }
  return count + nums.length;
};

console.log(countOperationsToEmptyArray([3, 4, -1]));
