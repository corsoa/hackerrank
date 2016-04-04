function calculateTreeGrowth(cycles) {
  var currHeight = 1;
  for (var i = 0; i < cycles; i++) {
    if (i % 2 === 0) {
      currHeight = currHeight * 2;
    } else {
      currHeight += 1;
    }
  }

  return currHeight;
}

console.log(calculateTreeGrowth(0));
console.log(calculateTreeGrowth(1));
console.log(calculateTreeGrowth(4));
console.log(calculateTreeGrowth(10));
