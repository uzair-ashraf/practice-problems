// Staircase detail

// This is a staircase of size:

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to.It is drawn using # symbols and spaces.The last line is not preceded by any spaces.

// Write a program that prints a staircase of size.

// Function Description

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.


function staircase(n) {
    let result = ''
    for(let i = 1; i <= n; i++) {
        result += ' '.repeat(n - i)
        result += '#'.repeat(i)
        if(i !== n) result += '\n'
    }
    console.log(result)
}
