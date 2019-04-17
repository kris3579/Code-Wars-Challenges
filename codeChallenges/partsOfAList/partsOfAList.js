'use strict';

function partList(array) {
  const possibleArrays = [];

  for (let i = 1; i < array.length; i++) {
    const tempArray = [...array];
    const secondHalf = tempArray.splice(i);
    const joinedFirstHalf = tempArray.join(' ');
    const joinedSecondHalf = secondHalf.join(' ');
    possibleArrays.push([joinedFirstHalf, joinedSecondHalf]);
  }

  return possibleArrays;
}

module.exports = partList;
