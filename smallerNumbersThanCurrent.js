const smallerNumbersThanCurrent = (nums) => {
  const countArr = [];

  for (let i = 0; i < nums.length; i++) {
    let singleCount = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        singleCount++;
      }
    }
    countArr.push(singleCount);
  }

  return countArr;
};

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
