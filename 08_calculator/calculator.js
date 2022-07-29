const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;	
};

const sum = function(array) {
  let result = 0;
  for (const number of array) {
    result += number;
  }
  return result;	
};

const multiply = function(array) {
  let result = 1;
  for (const number of array) {
    result *= number;
  }
  return result;
};

const power = function(number, exponent) {
  return number**exponent;
};

const factorial = function(number) {
  result = 1;
  for (current = 1; current <= number; current++) {
    result *= current;
  }
	return result;
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
