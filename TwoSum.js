var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      // return [i, map.get(diff)];
    } else {
      map.set(nums[i], i);
    }
  }
  console.log(map);
};

let nums = [-10, -1, -18, -19];
let target = -19;
console.log(twoSum(nums, target));
