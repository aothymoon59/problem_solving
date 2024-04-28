/* const search2 = (nums, target) => {
  return nums.includes(target);
}; */

const search2 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return true;
    }
  }
  return false;
};

console.log(search2([2, 5, 6, 0, 0, 1, 2], 0));
