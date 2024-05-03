const countOperationsToEmptyArray = (nums) => {
  let sortedArr = [...nums].sort((a, b) => a - b);
  let count = 0;
  while (nums.length > 0) {
    if (sortedArr[0] == nums[0]) {
      nums.shift();
      sortedArr.shift();
      count++;
    } else {
      nums.push(nums[0]);
      nums.shift();
      count++;
    }
  }
  return count;
};

console.log(countOperationsToEmptyArray([3, 4, -1]));
