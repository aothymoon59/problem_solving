const findDuplicate = (nums) => {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) return num;
    else set.add(num);
  }
};

console.log(findDuplicate([59, 58, 59, 75, 0]));
