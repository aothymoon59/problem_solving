const scoreOfString = (s) => {
  let sum = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charCodeAt(i) > s.charCodeAt(i + 1)) {
      sum += s.charCodeAt(i) - s.charCodeAt(i + 1);
    } else {
      sum += s.charCodeAt(i + 1) - s.charCodeAt(i);
    }
  }
  return sum;
};

console.log(scoreOfString("hello"));
