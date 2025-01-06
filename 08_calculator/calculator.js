const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, item) => {
    return total + item;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => {
    return total * item;
  }, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }

  for (i = num - 1; i > 0; i--) {
    num *= i;
  }

  return num;
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
