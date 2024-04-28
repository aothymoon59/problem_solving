/* const findMin = (nums) => {
  return Math.min(...nums);
}; */
const findMin = (nums) => {
  let minNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    }
  }
  return minNum;
};

console.log(findMin([3, 4, 5, 1, 2]));
