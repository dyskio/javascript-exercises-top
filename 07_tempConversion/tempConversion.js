const convertToCelsius = function(fah) {
  // The formula for converting Fahrenheit to Celsius is C = 5/9(F-32).
  let result = (5/9) * (fah - 32);
  result = Math.round(result * 10) / 10;
  return result;
};

const convertToFahrenheit = function(cel) {
  // The formula for converting Celsius to Fahrenheit is F = (C × 9/5) + 32
  let result = (cel * (9/5) + 32);
  result = Math.round(result * 10) / 10;
  return result;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
