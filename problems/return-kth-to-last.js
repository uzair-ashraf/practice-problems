module.exports = (linkedList, kth) => {
  const nodeCount = linkedList.countNodes()
  const offset = nodeCount - kth
  let currentNext = linkedList.head
  let counter = 0
  let node = null
  while(currentNext || node) {
    if(counter === offset) {
      node = currentNext
      break
    }
    counter++
    currentNext = currentNext.next
  }
  return node
}
