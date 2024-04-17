const maximumWealth = (accounts) => {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let wealth = accounts[i].reduce((acc, curr) => acc + curr, 0);
    maxWealth = Math.max(maxWealth, wealth);
  }
  return maxWealth;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
