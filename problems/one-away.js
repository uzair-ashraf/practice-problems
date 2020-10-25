// One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, pales -> true
// pale, bae -> false

module.exports = function (input, output) {
  if(input === output) return true;
  // Check removal
  if(input.length === output.length - 1) {
    for(let i = 0; i < input.length; i++) {
        if(output === stringChop(input, i)) return true;
    }
  }
  // Check insert
  if(input.length === output.length + 1) {
    //First gotta find which string was inserted
    let insertedLetter = null
    for(let i = 0; i < input.length; i++) {
      if(!output.includes(input[i])) {
        insertedLetter = input[i]
        break;
      }
    }
    if(!insertedLetter) return false;
    //Second insert found string into output and see if at anypoint the output matches the input
    for(let i = 0; i < input.length; i++) {
      if(output === stringInsert(input, insertedLetter, i)) return true;
    }
  }
  // Check replace
  if(input.length === output.length) {
    // Find which letter was replaced
    // also check that it was only one letter that was replaced
    let replacedLetter = null
    for(let i = 0; i < input.length; i++) {
      if(input[i] !== output[i]) {
        replacedLetter = input[i]
        break;
      }
    }
    if()
  }
}

function stringChop(str, index) {
  let result = ''
  for(let i = 0; i < str.length; i++) {
    if(i === index) continue;
    result += str[i]
  }
  return result;
}

function stringInsert(str, letter, index) {
  let result = ''
  for(let i = 0; i < str.length; i++) {
    if(index === i) {
      result += letter
    }
      result += str[i]
  }
  return result
}
