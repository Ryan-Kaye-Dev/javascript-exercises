const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
  let sum = 0;
	for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
};

const multiply = function(arr) {
  let multiplied = arr[0];
  for (let i = 1; i < arr.length; i++){
    multiplied *= arr[i]
  }
  return multiplied
}

const power = function(num, power) {
  return Math.pow(num,power)
};



const factorial = function(num) {
  if (num == 0 || num == 1){
    return 1
  } else {
    let factorial = 1;
    for (let i = 1; i <= num; i++){
      factorial *= i
    }
    return factorial
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
