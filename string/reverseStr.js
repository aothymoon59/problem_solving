const reverseStr = (s, k) => {
  let result = "";
  for (let i = 0; i < s.length; i += 2 * k) {
    let reversedSubstring = s
      .slice(i, i + k)
      .split("")
      .reverse()
      .join("");

    result += reversedSubstring + s.slice(i + k, i + 2 * k);
  }
  return result;
};

console.log(reverseStr("abcdefg", 2));
