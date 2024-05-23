function countPairs(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        if ((i * j) % k === 0) {
          count++;
        }
      }
    }
  }

  return count;
}

// Example usage:
const nums1 = [3, 1, 2, 2, 2, 1, 3];
const k1 = 2;
console.log(countPairs(nums1, k1)); // Output: 4

const nums2 = [1, 2, 3, 4];
const k2 = 1;
console.log(countPairs(nums2, k2)); // Output: 0
