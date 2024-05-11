const maximumValue = (strs) => {
  let maxVal = 0;
  for (let i = 0; i < strs.length; i++) {
    if (isNaN(Number(strs[i]))) {
      maxVal = Math.max(strs[i].length, maxVal);
    } else {
      maxVal = Math.max(Number(strs[i]), maxVal);
    }
  }
  return maxVal;
};

console.log(maximumValue(["3glko", "1"]));
