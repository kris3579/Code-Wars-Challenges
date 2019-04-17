'use strict';

function longestConsec(strArr, k) {
  if (strArr.length === 0 || k > strArr.length || k <= 0) {
    return '';
  }

  let longetstString = '';

  for (let i = 0; i < strArr.length; i++) {
    let characterCounter = 0;
    const tempArray = [];

    for (let m = 0; m < k; m++) {
      if (!strArr[i + m]) {
        break;
      }
      
      characterCounter += strArr[i + m].length;
      tempArray.push(strArr[i + m]);
    }

    if (characterCounter > longetstString.length) {
      longetstString = tempArray.join('');
    }
  }

  return longetstString;
}

module.exports = longestConsec;
