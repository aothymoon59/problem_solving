const sumOfSquares = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) == 0) {
      sum += nums[i] * nums[i];
    }
  }
  return sum;
};

console.log(sumOfSquares([1, 2, 3, 4]));
