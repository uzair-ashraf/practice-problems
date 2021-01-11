// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9


function diagonalDifference(arr) {
    let leftToRight = 0
    let rightToLeft = 0
    for(let i = 0, x = 0; i < arr.length; i++, x++) {
        leftToRight += arr[i][x]
    }
    for(let i = 0, x = arr.length - 1; i < arr.length; i++, x--) {
        rightToLeft += arr[x][i]
    }
    return Math.abs(leftToRight - rightToLeft)
}
