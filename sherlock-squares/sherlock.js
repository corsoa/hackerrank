function findDecentNumber(n) {
  var numThrees = 0;
  var numFives = n;
  var test = Array(n).join('5') + '5';
  if (parseInt(test) % 3 === 0) {
    return parseInt(test);
  } else if ((n < 3 || n < 8) && n !== 5) {
    //if we're mixing 5's and 3's, we need at least 8 digits to meet condition
    return -1;
  } else if (n === 5) {
    return 33333;
  } else {
    //always need three fives
    numThrees = 5;
    test = test.substring(0, test.length - 5) + '33333';

    //start filling up threes on LSB
    while (numThrees < (n - 3)) {
      if (numThrees % 5 === 0) {
        return parseInt(test);
      } else {
        numThrees++;
      }
    }

    //now start from MSB to LSB - start wrapping threes to fives

  }

  return -1;
}

console.log(findDecentNumber(1));
console.log(findDecentNumber(3));
console.log(findDecentNumber(5));
console.log(findDecentNumber(11));
