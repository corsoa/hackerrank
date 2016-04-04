'use strict';

// var process = require('process');

// process.stdin.resume();
// process.stdin.setEncoding('ascii');
// var _input = '';

// process.stdin.on("data", function (input) {
//   _input += input;
// });

// process.stdin.on("end", function () {
//   processData(_input);
// });

var fs = require('fs');

fs.readFile('inputs/sample2.txt', 'utf8', function(err, data) {
  if (!err) {
    processData(data);
  }
});

function testSubstringCase(line, substring) {
  var substringRegex = new RegExp('(?!\\b)' + substring + '(?!\\b)', 'g');
  var regexResult = line.match(substringRegex);
  if (regexResult) {
    return regexResult.length;
  }

  return 0;
}

function processData(input) {
  var lines = input.split('\n');
  var numTests = parseInt(lines[0]);
  var numSubstrings = parseInt(lines[numTests + 1]);
  var substringMatches = {};
  for (var i = 1; i <= numTests; i++) {
    for (var j = 1; j <= numSubstrings; j++) {
      if (!substringMatches[j]) {
        substringMatches[j] = 0;
      }

      substringMatches[j] += testSubstringCase(lines[i], lines[numTests + 1 + j]);
    }
  }

  Object.keys(substringMatches).map(function(keyName) {
    console.log(substringMatches[keyName] + '\n');
  });

}
