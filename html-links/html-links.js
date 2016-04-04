'use strict';

var fs = require('fs');

fs.readFile('inputs/sample5.txt', 'utf8', function(err, data) {
  if (!err) {
    processData(data);
  }
});

/**
 * @param {string} line  - one line of input
 */
function processLine(line) {
  var linkRegex = /a\shref=\"(.*?)\"/g;
  var linkMatchesResult = linkRegex.exec(line);
  var linksThisLine = [];
  if (!linkMatchesResult) {
    return false;
  }

  while (linkMatchesResult) {
    //add the result of the capturing group
    linksThisLine.push(linkMatchesResult[1]);
    linkMatchesResult = linkRegex.exec(line);
  }

  var titleRegex = /<a\s.*?>(.*?)</g;
  var titleMatchesResult = titleRegex.exec(line);
  var titlesThisLine = [];
  if (!titleMatchesResult) {
    return false;
  }

  while (titleMatchesResult) {
    titlesThisLine.push(titleMatchesResult[1]);
    titleMatchesResult = titleRegex.exec(line);
  }

  var lineBuffer = '';

  //assumes there will be an equal number of titles and links (no malformatted HTML)
  for (var i = 0; i < titlesThisLine.length; i++) {
    lineBuffer += linksThisLine[i] + ',' + titlesThisLine[i] + '\n';
  }

  return lineBuffer;
}

/**
 * @param {string} data - Entire file contents
 */
function processData(data) {
  var lines = data.split('\n');
  var resultBuffer = '';
  var lineResult;
  var numLines = parseInt(lines[0]);
  lines.splice(0, 1);
  for (var i = 0; i < numLines; i++) {
    lineResult = processLine(lines[i]);
    if (lineResult) {
      resultBuffer += lineResult;
    }
  }

  console.log(resultBuffer);
}
