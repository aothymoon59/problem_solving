const judgeSquareSum = (c) => {
  let a;
  for (let i = 0; i <= Math.sqrt(c); i++) {
    a = Math.sqrt(c - i * i);
    if (Math.ceil(a) == Math.floor(a)) {
      return true;
    }
  }
  return false;
};

console.log(judgeSquareSum(3));
