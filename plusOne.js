const plusOne = (digits) => {
  //   console.log((parseInt(digits.join("")) + 1).toString().split(""));
  const n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};

console.log(plusOne([9]));
