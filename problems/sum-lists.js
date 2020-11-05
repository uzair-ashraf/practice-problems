// Sum Lists: You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
// function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input: (7-) 1 -) 6) + (5 -) 9 -) 2).Thatis,617 + 295.
// Output: 2 -) 1 -) 9. That is, 912.
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem.
// EXAMPLE
// Input: (6 -) 1 -) 7) + (2 -) 9 -) 5).Thatis,617 + 295.
// Output: 9 -) 1 -) 2. That is, 912.

const { SingleLinkedList } = require('../data-structures')

module.exports = (linkedList1, linkedList2) => {
  let result1 = ''
  let result2 = ''
  let node1 = linkedList1.head
  let node2 = linkedList2.head
  while(node1) {
    result1 += node1.val
    node1 = node1.next
  }
  while(node2) {
    result2 += node2.val
    node2 = node2.next
  }
  const linkedList = new SingleLinkedList()
  const nodeValues = (parseInt(result1) + parseInt(result2)).toString().split('').forEach(v => linkedList.add(parseInt(v)))
  return linkedList
}
