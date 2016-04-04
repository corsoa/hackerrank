var fs = require('fs');
var outputData;

function processData(err, input) {
  var lines = input.split('\n');
  var n = lines[0];
  for (var i = 1; i <= parseInt(n); i++) {
    var digits = lines[i].split(' ').map(Number);
    compareResults(computeSquaresBetween(digits), i - 1, digits);
  }

}

function compareResults(computed, lineNumber, original) {
  if (computed !== parseInt(outputData[lineNumber])) {
    console.log('Expected ' + outputData[lineNumber] + ' but received ' + computed + ' for input data ' + original.toString());
  }
}

function computeSquaresBetween(arr) {
  var start = arr[0];
  var end = arr[1];
  if (start === 1) {
    return Math.floor(Math.sqrt(end));
  } else if (start === end) {
    if (Math.sqrt(start) % 1 === 0) {
      return 1;
    } else {
      return 0;
    }
  } else if (Math.sqrt(start) % 1 === 0 || Math.sqrt(end) % 1 === 0) {
    return Math.ceil(Math.sqrt(end)) - Math.floor(Math.sqrt(start));
  } else {
    return Math.ceil(Math.sqrt(end)) - Math.floor(Math.sqrt(start)) - 1;
  }
}

fs.readFile(__dirname + '/outputs/sherlock-squares/test-case2.txt', 'utf8', function(err, data) {
  outputData = data.toString().split('\n');
});

fs.readFile(__dirname + '/inputs/sherlock-squares/test-case2.txt', 'utf8', processData);
