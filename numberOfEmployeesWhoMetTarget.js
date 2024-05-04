// Method 1

// const numberOfEmployeesWhoMetTarget = (hours, target) => {
//   let count = 0;
//   for (let i = 0; i < hours.length; i++) {
//     if (hours[i] >= target) {
//       count++;
//     }
//   }
//   return count;
// };

// method 2
const numberOfEmployeesWhoMetTarget = (hours, target) => {
  return hours.filter((item) => item >= target).length;
};

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2));
