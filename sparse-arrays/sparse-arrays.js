//var dataTools = require('../common.js')();
var fs = require('fs');

function main() {
  while (lines.length > 0) {
    var numStringsToRead = parseInt(readLine());
    var words = [];

    for (var i = 0; i < numStringsToRead; i++) {
      words.push(readLine());
    }

    var numStringsToSearch = parseInt(readLine());
    var wordToSearch = '';
    for (var j = 0; j < numStringsToSearch; j++) {
      wordToSearch = readLine();

      //find all indexes of this word in the array
      var wordsCopy = words.slice();
      var numTimesFound = 0;
      if (wordsCopy.indexOf(wordToSearch) !== -1) {
        while (wordsCopy.indexOf(wordToSearch) !== -1) {
          numTimesFound++;
          wordsCopy.splice(wordsCopy.indexOf(wordToSearch), 1);
        }
      }

      console.log(numTimesFound);
    }
  }
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
