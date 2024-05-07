const totalMoney = (n) => {
  let total = 0;
  let i = 1;
  while (i <= n / 7) {
    total += (7 * (2 * i + 6)) / 2;
    i++;
  }
  let remainder = n % 7;
  if (remainder != 0) {
    total += (remainder * (2 * i + (remainder - 1))) / 2;
  }
  return total;
};

console.log(totalMoney(10));
