process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var d1_temp = readLine().split(' ');
    var d1 = parseInt(d1_temp[0]);
    var m1 = parseInt(d1_temp[1]);
    var y1 = parseInt(d1_temp[2]);
    var d2_temp = readLine().split(' ');
    var d2 = parseInt(d2_temp[0]);
    var m2 = parseInt(d2_temp[1]);
    var y2 = parseInt(d2_temp[2]);
    var actual = new Date(m1.toString() + '-' + d1.toString() + '-' + y1.toString());
    var expected = new Date(m2.toString() + '-' + d2.toString() + '-' + y2.toString());
    if (actual > expected) {
        if (actual.getFullYear() === expected.getFullYear() && actual.getMonth() === expected.getMonth()) {
            console.log(15 * ((actual - expected) / 86400000));
        }
        else if (actual.getMonth() > expected.getMonth() && actual.getFullYear() === expected.getFullYear()) {
            console.log(500 * (actual.getMonth() - expected.getMonth()));
        }
        else {
            console.log(10000);
        }
    }
    else {
        console.log(0);
    }
}
