// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)

// To figure out if something is a permutation of a palindrome we need to make sure that there is an
// even amount of each letter with atleast one odd number
// because inorder for a string to be a permutation of a palindrome it needs to meet these characteristics.
module.exports = function (string) {
  string = string.split(' ').join('').toLowerCase()
  const result = {}
  let wasOddOneFound = false
  for(let i = 0; i < string.length; i++) {
    if (result[string[i]]) {
      result[string[i]]++
    } else {
      result[string[i]] = 1
    }
  }
  let evenCounter = 0
  for(const letter in result) {
    if(result[letter] % 2 === 0) {
      evenCounter++
    } else {
      if(wasOddOneFound) {
        return false
      }
      wasOddOneFound = true
    }
  }
  return evenCounter + 1 === Object.keys(result).length && wasOddOneFound
}
