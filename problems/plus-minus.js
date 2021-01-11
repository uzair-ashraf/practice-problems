// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.Print the decimal value of each fraction on a new line with  places after the decimal.

//   Note: This challenge introduces precision problems.The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

function plusMinus(arr) {
    const data = {
        positive: 0,
        negative: 0,
        zero: 0
    }
    for(let i = 0; i < arr.length; i++) {
        const v = arr[i]
        if(v > 0) {
            data.positive++
        } else if(v < 0) {
            data.negative++
        } else {
            data.zero++
        }
    }
    for(const count in data) {
        console.log(parseFloat((data[count] / arr.length).toFixed(6)))
    }
}
