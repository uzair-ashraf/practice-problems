module.exports = (string, subString) => {
  if(subString.length > string.length) return false
  for(let i = 0; i < subString.length; i++) {
    const letterIndex = string.indexOf(subString[i])
    if(letterIndex !== -1) {
      string = stringChop(string, letterIndex)
    } else {
      return false
    }
  }
  return true
}

function stringChop(str, index) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (i === index) continue;
    result += str[i]
  }
  return result;
}
