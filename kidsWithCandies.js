const kidsWithCandies = (candies, extraCandies) => {
  let maxNum = Math.max(...candies);
  let resArr = [];
  for (const candy of candies) {
    resArr.push(candy + extraCandies >= maxNum);
  }
  return resArr;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
