'use strict';

function limitNumberOfInvidualElements(arr, n) {
  const elements = new Map([]);

  for (let i = 0; i < arr.length; i++) {
    console.log(elements);
    if (elements[arr[i]]) {
      console.log(`instance of ${arr[i]} exists`);
      if (elements[arr[i]] >= n) {
        console.log(`deleting instance of ${arr[i]} for surpassing limit`);
        arr.splice(i, 1);
      }

      if (elements[arr[i]] < n) {
        console.log(`adding to counter for ${arr[i]}`);
        elements[arr[i]] += 1;
      }
    }

    if (!elements[arr[i]]) {
      console.log(`creating map value for ${arr[i]}`);
      elements[arr[i]] = 1;
    }
  }

  return arr;
}

module.exports = limitNumberOfInvidualElements;
