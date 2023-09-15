const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(...args) {
  let total = 0;
  for (let num of args) {
      if (Array.isArray(num)) {
          total += sum(...num); // Recursively call sum for nested arrays
      } else {
          total += num;
      }
  }
  return total;
};

const multiply = function(...args) {
  const flattenedArray = args.flat(Infinity);
  if (flattenedArray.length === 0) {
      return 0;
  }
  return flattenedArray.reduce((acc, num) => acc * num, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  let total = 1;
	if (num === 0 || num === 1){
    return 1;
  } else {
    for (let i = 1; i <= num; i++){
      total *= i;
    }
  }
  return total;
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
