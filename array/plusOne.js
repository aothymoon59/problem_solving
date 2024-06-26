const plusOne = (digits) => {
  const n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  // If we're here, all digits were 9
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3]));
