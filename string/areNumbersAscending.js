const areNumbersAscending = (s) => {
  const tokens = s.split(" ");
  const numbers = tokens
    .filter((token) => !isNaN(token) && token !== "")
    .map(Number);

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] <= numbers[i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(
  areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
);
