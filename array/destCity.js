var destCity = function (paths) {
  const outgoingCities = new Set();

  for (let i = 0; i < paths.length; i++) {
    outgoingCities.add(paths[i][0]);
  }

  for (let i = 0; i < paths.length; i++) {
    if (!outgoingCities.has(paths[i][1])) {
      return paths[i][1];
    }
  }
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
