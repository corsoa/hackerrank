function main() {
  var t = 3;
  var allLines = '10 2 5\n12 4 4\n6 2 2';
  var lines = allLines.split('\n');
  for (var a0 = 0; a0 < t; a0++) {
    var n_temp = lines[a0].split(' ');
    var n = parseInt(n_temp[0]);
    var c = parseInt(n_temp[1]);
    var m = parseInt(n_temp[2]);

    var currentFunds = n;
    var consumedChocolate = 0;
    var wrapperBalance = 0;
    while (currentFunds >= c) {
      consumedChocolate++;
      currentFunds -= c;
      wrapperBalance += 1;
      if (wrapperBalance === m) {
        wrapperBalance = 0;
        currentFunds += c;
      }
    }

    console.log(consumedChocolate);
  }
}

main();
