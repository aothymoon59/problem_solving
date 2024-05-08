const separateDigits = (nums) => {
  let answer = [];
  nums.forEach((num) => {
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
      let digit = parseInt(numStr.charAt(i));
      answer.push(digit);
    }
  });
  return answer;
};

console.log(separateDigits([13, 25, 83, 77]));
