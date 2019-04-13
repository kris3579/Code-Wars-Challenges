'use strict';

function totalBlocksInIrregularPyramid(w, l, h) {
  let totalBlocks = w * l;
  let layerWidth = w;
  let layerLength = l;
  
  for (let i = 1; i < h; i++) {
    layerWidth += 1;
    layerLength += 1;
    const layerTotal = layerWidth * layerLength;
    totalBlocks += layerTotal;
  }

  return totalBlocks;
}

module.exports = totalBlocksInIrregularPyramid;
