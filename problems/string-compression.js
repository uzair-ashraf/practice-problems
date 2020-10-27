// String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters.For example, the string aabcccccaaa would become a2b1c5a3.If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string.You can assume the string has only uppercase and lowercase letters(a - z).

module.exports = function(str) {
  let result = str[0]
  let currentLetter = str[0]
  let letterCounter = 0
  for(let i = 0; i < str.length; i++) {
    if(currentLetter === str[i]) {
      letterCounter++
    } else {
      if(!letterCounter) {
        result += 1
      } else {
        result += letterCounter
      }
      result += str[i]
      currentLetter = str[i]
      letterCounter = 1
    }
  }
  result += letterCounter
  return result
}
