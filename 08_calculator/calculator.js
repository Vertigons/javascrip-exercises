const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const result = array.reduce((total, nextValue) => 
     total + nextValue
  , 0);
  return result;
};

const multiply = function(array) {
  const result = array.reduce((total, nextValue) => 
     total * nextValue
  , 1);
  return result;
};

const power = function(a, b) {
	let result = 1;
  for(let i = 0; i < b; i++) {
    result = result * a;
  }
  return result;
};

const factorial = function(a) {
	if(a < 0)
    return -1;
  else if (a === 0)
    return 1;
  else 
    return (a * factorial(a - 1));
  
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
