var fs = require('fs');
var lines = [];

function main() {
  var t = readLine();
  var currLine = 1;
  for (var a0 = 0; a0 < t; a0++) {
    var R_temp = readLine().split(' ');
    var R = parseInt(R_temp[0]);
    var C = parseInt(R_temp[1]);
    var G = [];
    for (var G_i = 0; G_i < R; G_i++){
      G[G_i] = readLine();
    }

    var r_temp = readLine().split(' ');
    var r = parseInt(r_temp[0]);
    var c = parseInt(r_temp[1]);
    var P = [];
    for (var P_i = 0; P_i < r; P_i++) {
      P[P_i] = readLine();
    }

    if (isSubsetOf(P, G)) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }

}

function isSubsetOf(P, G) {
  var subsetArr = getTwoDimArr(P);
  var fullArr = getTwoDimArr(G);

  for (var i = 0; i < fullArr.length - subsetArr.length; i++) {
    for (var j = 0; j < fullArr[0].length - subsetArr[0].length; j++) {
      if (fullArr[i][j] === subsetArr[i][j]) {
        if (investigateMatch(i, j, fullArr, subsetArr)) {
          return true;
        }
      }
    }

  }

  return false;
}

/**
 * Given the known dimensions of a pattern, and a starting position, truncate
 * the full array and determine if these arrays are equal.
 */
function investigateMatch (row, col, fullArr, subsetArr) {
  var rows = subsetArr.length;
  var cols = subsetArr[0].length;
    
  return false;
}

function getTwoDimArr(arr) {
  var twoDimArr = [];
  arr.map(function(row, rowIndex) {
    twoDimArr[rowIndex] = [];
    row.toString().split('').map(function(column, columnIndex) {
      twoDimArr[rowIndex].push(parseInt(column));
    }, this);
  });

  return twoDimArr;
}

function loadData() {
  var allData = fs.readFile('inputs/example.txt', 'utf-8', processData);
}

function readLine() {
  var lineToReturn = lines[0];
  lines.splice(0, 1);
  return lineToReturn;
}

function processData(err, data) {
  lines = data.split('\n');
  main();
}

loadData();
