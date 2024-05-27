const containsDuplicate = (nums) => {
  let duplicateVal = [];

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (duplicateVal.indexOf(value) !== -1) {
      return true;
    }
    duplicateVal.push(value);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
