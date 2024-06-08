const isPerfectSquare = (num) => {
  let numToRoot = Math.floor(Math.sqrt(num));
  return numToRoot * numToRoot == num;
};

console.log(isPerfectSquare(16));
