// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. (an you do this in place ?
// Input: [
//   [10, 7, 8, 12],
//   [15, 75, 85, 152],
//   [11, 17, 18, 121],
//   [1340, 57, 38, 512],
// ]
// Output: [
//   [1340, 11, 15, 10],
//   [57, 17, 75, 7],
//   [38, 18, 85, 8],
//   [512, 121, 152, 12],
// ]

module.exports = function (matrix) {
  const matrixClone = matrix.map(arr => [...arr])
  const result = []
  let rowCount = 0
  while(result.length !== 4) {
    const row = []
    for(let i = matrixClone.length - 1; i >= 0; i--) {
      row.push(matrixClone[i][rowCount])
    }
    result.push(row)
    rowCount++
  }
  return result
}
