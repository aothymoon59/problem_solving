var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  let doubleS = s + s;

  return doubleS.includes(goal);
};
