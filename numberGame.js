const numberGame = (nums) => {
  const sortedArr = nums.sort((a, b) => a - b);
  const aliceArr = [];
  const bobArr = [];
  const resArr = [];

  for (let i = 0; i < sortedArr.length; i++) {
    if (i % 2 == 0) {
      aliceArr.push(sortedArr[i]);
    } else {
      bobArr.push(sortedArr[i]);
    }
  }

  for (let i = 0; i < aliceArr.length; i++) {
    resArr.push(bobArr[i]);
    resArr.push(aliceArr[i]);
  }

  return resArr;
};
console.log(numberGame([5, 4, 2, 3]));
