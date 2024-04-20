// method 1
/* const maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
}; */

// method 2
const maxProductDifference = function (arr) {
  let len = arr.length;
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    len--;
  }

  return arr[arr.length - 1] * arr[arr.length - 2] - arr[0] * arr[1];
};

// console.log(maxProductDifference([5, 6, 2, 7, 4]));
// console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));
// console.log(maxProductDifference([1, 6, 7, 5, 2, 4, 10, 6, 4]));
// console.log(maxProductDifference([10, 10, 10, 10]));
console.log(maxProductDifference([2, 9, 5, 9, 1]));
