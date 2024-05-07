const fizzBuzz = (n) => {
  let resArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      resArr.push("FizzBuzz");
    } else if (i % 3 == 0) {
      resArr.push("Fizz");
    } else if (i % 5 == 0) {
      resArr.push("Buzz");
    } else {
      resArr.push(i);
    }
  }
  return resArr;
};

console.log(fizzBuzz(15));
