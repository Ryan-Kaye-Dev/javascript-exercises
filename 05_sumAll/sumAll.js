const sumAll = function (a, b) {
  if (a < 0 || b < 0) {
    return "ERROR";
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }

  let sum = 0;

  for (let i = Math.min(...arguments); i <= Math.max(...arguments); i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
