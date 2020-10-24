// Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other.

module.exports = function (str1, str2) {
  return str1.sort() === str2.sort()
}
