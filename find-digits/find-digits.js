function calculateDivisibleDigits(n) {
  var comprisingDigits = [];
  n.toString().split('').map(function(comprisingDigit) {
    comprisingDigits.push(comprisingDigit);
  });

  var numDivisible = 0;
  comprisingDigits.map(function(uniqueDigit) {
    if (n % uniqueDigit === 0) {
      numDivisible += 1;
    }
  });

  return numDivisible;
}

console.log(calculateDivisibleDigits(12));
console.log(calculateDivisibleDigits(1012));
