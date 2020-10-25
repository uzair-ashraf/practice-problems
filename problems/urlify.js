// URLify: Write a method to replace all spaces in a string with '%2e: You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: if implementing in Java, please use a character array so that you can
// perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith , 13
// Output: "Mr%2eJohn%2eSmith"

module.exports = function (string, finalLength) {
  const param = string.trim()
  let result = ''
  for(let i = 0; i < param.length; i++) {
    result += param[i] === ' ' ? '%20' : param[i]
  }
  return result
}
