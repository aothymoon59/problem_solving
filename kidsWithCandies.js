const kidsWithCandies = (candies, extraCandies) => {
  let maxNum = Math.max(...candies);
  let resArr = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxNum) {
      resArr.push(true);
    } else {
      resArr.push(false);
    }
  }
  return resArr;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
