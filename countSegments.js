const countSegments = (s) => {
  let strArr = s.split(" ");
  if (strArr.length < 1) {
    return 0;
  }
  let strCount = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].trim().length > 0) {
      strCount++;
    }
  }
  return strCount;
};

console.log(countSegments("Hello, my name is John"));
