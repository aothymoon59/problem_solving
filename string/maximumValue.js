const maximumValue = (strs) => {
  let maxVal = 0;
  for (let i = 0; i < strs.length; i++) {
    if (isNaN(parseInt(strs[i]))) {
      maxVal = Math.max(strs[i].length, maxVal);
    } else {
      maxVal = Math.max(parseInt(strs[i]), maxVal);
    }
  }
  return maxVal;
};

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));
