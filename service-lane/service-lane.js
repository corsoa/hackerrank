var fs = require('fs');

fs.readFile(__dirname + '/outputs/service-lane/test-case2.txt', 'utf8', function(err, data) {
  if (!err) {
    outputData = data.split('\n');
  } else {
    console.log(err);
  }
});

fs.readFile(__dirname + '/inputs/service-lane/test-case2.txt', 'utf8', processData);

function processData(err, data) {
  var lines = data.split('\n');
  var n_temp = lines[0].split(' ');
  var n = parseInt(n_temp[0]);
  var t = parseInt(n_temp[1]);
  width = lines[1].split(' ');
  width = width.map(Number);
  for (var a0 = 2; a0 < t + 2; a0++) {
    var i_temp = lines[a0].split(' ');
    var i = parseInt(i_temp[0]);
    var j = parseInt(i_temp[1]);
    var smallestWidth = null;

    //iterate through width[i] through width[j] to find smallest value
    for (var k = i; k <= j; k++) {
      if (smallestWidth === null) {
        smallestWidth = width[k];
      } else {
        if (width[k] < smallestWidth) {
          smallestWidth = width[k];
        }
      }
    }

    console.log(smallestWidth);
  }
}
