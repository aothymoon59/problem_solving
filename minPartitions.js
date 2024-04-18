// method 1

// const minPartitions = (n) => {
//   return Math.max(...n.split(""));
// };

// method 2
/* const minPartitions = (n) => {
  if (n.includes("9")) {
    return 9;
  } else if (n.includes("8")) {
    return 8;
  } else if (n.includes("7")) {
    return 7;
  } else if (n.includes("6")) {
    return 6;
  } else if (n.includes("5")) {
    return 5;
  } else if (n.includes("4")) {
    return 4;
  } else if (n.includes("3")) {
    return 3;
  } else if (n.includes("2")) {
    return 2;
  } else if (n.includes("1")) {
    return 1;
  } else {
    return 0;
  }
}; */

// method 3
// const minPartitions = (n) => {
//   return Number(n.split("").sort((a, b) => b - a)[0]);
// };

// method 4

const minPartitions = (n) => {
  let maxVal = parseInt(n[0]);

  for (let i = 0; i < n.length; i++) {
    const element = parseInt(n[i]);
    if (element > maxVal) {
      maxVal = element;
    }
  }

  return maxVal;
};

console.log(minPartitions("27346209830709182346"));
