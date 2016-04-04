//var dataTools = require('../common.js')();
var fs = require('fs');

function main() {
  var arr = [];
  for (arr_i = 0; arr_i < 6; arr_i++){
    arr[arr_i] = readLine().split(' ');
    arr[arr_i] = arr[arr_i].map(Number);
  }

  var hourglassVal = 0;
  var highestHourGlass = null;
  for (var i = 0; i < arr.length - 2; i++) {
    for (var x = 0; x < arr[0].length - 2; x++) {
      hourglassVal = 0;
      hourglassVal += arr[i][x] + arr[i][x + 1] + arr[i][x + 2];
      hourglassVal += arr[i + 1][x + 1];
      hourglassVal += arr[i + 2][x] + arr[i + 2][x + 1] + arr[i + 2][x + 2];
      if ((highestHourGlass === null && parseInt(hourglassVal)) || hourglassVal > highestHourGlass) {
        highestHourGlass = hourglassVal;
      }
    }
  }

  console.log(highestHourGlass);
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

/**
var timer = setInterval(function() {
  dataTools.loadData();
  if (dataTools.hasOwnProperty('readLine')) {
    clearInterval(timer);
    if (!ierr) {
      for (var i = 0; i < dataTools.numSets; i++) {
        dataTools.useSet(i);
        main();
      }
    }
  }

}, 100);
*/
