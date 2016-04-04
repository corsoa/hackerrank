"use strict";

function main() {
  var n = 11;
  var s = 'DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.';
  var k = 45;
  var matches = s.match(/[a-zA-Z]+/g);
  var constructedString;
  if (matches !== null) {
    var alphabetObj = getCipher(k);
    constructedString = '';
    var matchPos = 0;
    var toPos = 0;
    var charsAddedThisPass = 0;
    var nonWordCharsToAdd = 0;
    var wordToAdd = '';
    for (var i = 0; i < matches.length; i++) {
      matchPos = s.indexOf(matches[i]);
      constructedStrAddChars = 0;

      //special case when non-word chars at beginning
      if (matchPos > 0 && i === 0) {
        nonWordCharsToAdd = s.substring(0, matchPos);
        constructedString = nonWordCharsToAdd;
      }

      wordToAdd = shiftWord(matches[i], alphabetObj);
      constructedString += wordToAdd;

      if (i === matches.length - 1) {
        //last item to translate
        nonWordCharsToAdd = s.substring(matchPos + matches[i].length);
        constructedString +=  nonWordCharsToAdd;
      } else {
        toPos = s.indexOf(matches[i + 1]) + matchPos;
        nonWordCharsToAdd = s.substring(matchPos + matches[i].length, toPos);
        constructedString += nonWordCharsToAdd;
      }

      charsAddedThisPass = wordToAdd.length + nonWordCharsToAdd.length;
      s = s.substring(charsAddedThisPass);

    }
  } else {
    constructedString = s;
  }

  console.log(constructedString);
}

function getCipher(pos) {
  var alphabetObj = {};
  var alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var alphabetArrCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  [alphabetArr, alphabetArrCaps].forEach(function(alphabetTypedArr, typeIndex) {
    var numToShift = 0;
    var insertPos = 0;

    for (var i = 0; i < 26; i++) {
      if (26 - i - pos > 0) {
        //shift ahead
        numToShift = pos;
        alphabetObj[alphabetTypedArr[i]] = alphabetTypedArr[i + pos];
      } else {
        //compute
        if (((pos + i) % 26) === 26) {
          pos = 26 - i;
        }

        alphabetObj[alphabetTypedArr[i]] = alphabetTypedArr[(pos + i) % 26];
      }
    }
  });

  return alphabetObj;
}

function shiftWord(word, alphabetObj) {
  var letters = word.split('');
  var newWord = '';
  for (var i = 0; i < letters.length; i++) {
    newWord += alphabetObj[letters[i]];
  }

  return newWord;
}

main();
