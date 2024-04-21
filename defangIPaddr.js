// methd 1
// const defangIPaddr = (address) => {
//   return address.split(".").join("[.]");
// };

// method 2
const defangIPaddr = (address) => {
  let newStr = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      newStr += "[.]";
    } else {
      newStr += address[i];
    }
  }
  return newStr;
};

console.log(defangIPaddr("1.1.1.1"));
