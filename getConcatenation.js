// method 1 using spread operator ********
/* const getConcatenation = (nums) => {
  return [...nums, ...nums];
}; */
// method 2**************
const getConcatenation = (nums) => {
  const result = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    result[i] = nums[i];
    result[i + len] = nums[i];
  }
  return result;
};

console.log(getConcatenation([1, 2, 1]));
