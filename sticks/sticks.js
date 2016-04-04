function main() {
  // var n = 6;
  //var arr = [5, 4, 4, 2, 2, 8];
  var n = 8;
  var arr = [1, 13, 3, 8, 14, 9, 4, 4];

  arr.sort(function(a, b) {
    return a - b;
  });

  var shortestStick = arr[0];
  var remainingSticks = arr.length;

  while (remainingSticks > 0) {
    console.log(remainingSticks);
    for (var i = 0; i < arr.length; i++) {
      arr[i] -= shortestStick;
      if (arr[i] <= 0) {
        arr.splice(i, 1);
        i--;
      }
    }

    shortestStick = arr[0];
    remainingSticks = arr.length;
  }

}
main();
