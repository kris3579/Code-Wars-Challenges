'use strict';

const totalBlocksInIrregularPyramid = require('./../blocksInIrregularPyramid.js');

describe('Testing for successful total block calculations', () => {
  test('variety of cases', () => {
    const test1 = totalBlocksInIrregularPyramid(1, 1, 2);
    const test2 = totalBlocksInIrregularPyramid(2, 4, 3);
    const test3 = totalBlocksInIrregularPyramid(1, 10, 6);
    const test4 = totalBlocksInIrregularPyramid(3, 6, 7);
    const test5 = totalBlocksInIrregularPyramid(14, 12, 20);
    expect(test1).toEqual(5);
    expect(test2).toEqual(47);
    expect(test3).toEqual(280);
    expect(test4).toEqual(406);
    expect(test5).toEqual(10770);
  });
});
