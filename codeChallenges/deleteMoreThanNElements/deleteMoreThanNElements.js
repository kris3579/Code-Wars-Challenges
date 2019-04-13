'use strict';

function limitNumberOfInvidualElements(arr, n) {
  const elements = new Map([]);
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (elements[arr[i]]) {
      if (elements[arr[i]] < n) {
        elements[arr[i]] += 1;
        newArr.push(arr[i]);
      }
    }

    if (!elements[arr[i]]) {
      elements[arr[i]] = 1;
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

module.exports = limitNumberOfInvidualElements;
