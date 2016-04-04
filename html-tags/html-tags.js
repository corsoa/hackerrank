'use strict';

var fs = require('fs');

fs.readFile('inputs/sample3.txt', 'utf8', function(err, data) {
  if (!err) {
    processData(data);
  }
});

function processLine(line) {
  var tagRegex = /<([a-zA-Z]+[\d]?)\s?/g;
  var hasResult = tagRegex.exec(line);
  var allTags = [];
  if (!hasResult) {
    return false;
  }

  while (hasResult) {
    if (allTags.indexOf(hasResult[1]) === -1) {
      allTags.push(hasResult[1]);
    }

    hasResult = tagRegex.exec(line);
  }

  return allTags;
}

function sortUnique(arr) {
  arr = arr.sort();

  var ret = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      ret.push(arr[i]);
    }

  }

  return ret;
}

function processData(data) {
  var lines = data.split('\n');
  var numLines = parseInt(lines[0]);
  var allTags = [];
  var lineResult;
  for (var i = 1; i <= numLines; i++) {
    lineResult = processLine(lines[i]);
    if (lineResult) {
      allTags = allTags.concat(lineResult);
    }
  }

  console.log(sortUnique(allTags).join(';'));
}
