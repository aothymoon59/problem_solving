const sortPeople = (names, heights) => {
  let sortedHeight = [...heights].sort((a, b) => b - a);
  let resArr = [];
  let newIndex = 0;
  for (let i = 0; i < names.length; i++) {
    newIndex = heights.indexOf(sortedHeight[i]);
    resArr.push(names[newIndex]);
  }
  return resArr;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
