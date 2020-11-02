module.exports = linkedList => {
  const nodeCount = linkedList.countNodes()
  const doesMiddleExist = nodeCount % 2 === 1
  let middleIndex = doesMiddleExist ? (nodeCount + 1) / 2 : nodeCount / 2
  let currentNext = linkedList.head
  let counter = 1
  while (currentNext) {
    counter++
    if (counter === middleIndex) {
      currentNext.next = currentNext.next.next
      break;
    }
    currentNext = currentNext.next
  }
}
