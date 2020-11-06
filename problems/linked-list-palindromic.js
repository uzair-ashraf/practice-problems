//  Implement a function to check if a linked list is a palindrome.
module.exports = linkedList => {
  const arr = []
  let { head } = linkedList
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  const reversedArr = [...arr].reverse()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== reversedArr[i]) {
      return false
    }
  }
  return true
};
