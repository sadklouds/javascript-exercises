const convertToCelsius = function(tempFahrenheit) {
  let result = (tempFahrenheit - 32) * (5/9);
  return Math.round(result * 1e1) / 1e1;
};

const convertToFahrenheit = function( tempCelsius) {
   let result = ((9/5) * tempCelsius) + 32;
   return Math.round(result * 1e1) / 1e1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
