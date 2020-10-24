// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures ?

module.exports = function (str) {
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < str.length; j++) {
      if(i === j) continue;
      if(str[i] === str[j]) return false;
    }
  }
  return true;
}
