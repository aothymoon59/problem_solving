const addDigits = (num) => {
  let numStr = num.toString().split("");

  while (numStr.length > 1) {
    numStr = numStr
      .reduce((acc, curr) => acc + parseInt(curr), 0)
      .toString()
      .split("");
  }

  return Number(numStr.join(""));
};

console.log(addDigits(38));
