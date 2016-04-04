'use strict';

var fs = require('fs');

var exports = {
  loadData: loadData,
};

/**
 * @param {Object} err - err
 * @param {Object[]} files - test
 */
function processDir(err, files) {
  this.filesToProcess = files.length;
  this.numProcessed = 0;
  this.dataSets = [];
  files.map(function(filePath, fileIndex) {
    fs.readFile('inputs/' + filePath, 'utf-8', processData);
  }, this);
}

function processData(err, data) {
  this.dataSets.push(data.split('\n'));
  this.numProcessed++;
  if (this.numProcessed === this.filesToProcess) {
    delete exports.loadData;
    exports.readLine = function() {
      var lineToReturn = this.dataSets[this.currSet][0];
      data[this.currSet].splice(0, 1);
      return lineToReturn;
    };

    exports.useSet = function(i) {
      this.currSet = i;
    };

  }
}

function loadData(cb) {
  fs.readdir('inputs', processDir);
}

module.exports = function(cb) {
  return {
    loadData: loadData,
  };
};
