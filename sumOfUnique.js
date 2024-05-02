const sumOfUnique = (nums) => {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let isUnique = nums.every((num, index) => index === i || num !== nums[i]);
    if (isUnique) {
      newArr.push(nums[i]);
    }
  }

  return newArr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfUnique([1, 2, 3, 2]));
