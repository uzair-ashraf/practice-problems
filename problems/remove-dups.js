// Write code to remove duplicates from an unsorted linked list.
const { SingleLinkedList } = require('../data-structures')
module.exports = linkedList => {
  const newLinkedList = new SingleLinkedList()
  const uniqueValues = new Set([...linkedList].map(x => x.val))
  uniqueValues.forEach(v => {
    newLinkedList.add(v)
  })
  return newLinkedList
}
