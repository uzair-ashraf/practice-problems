class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

module.exports = class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  add(val) {
    if (!this.head) return this.addFirstNode(val)
    const node = new Node(val)
    this.tail = node
    let currentNext = this.head
    while (currentNext.next) {
      currentNext = currentNext.next
    }
    currentNext.next = node
    return true
  }
  remove(val) {
    let currentNext = this.head
    while (currentNext.next) {
      currentNext = currentNext.next
    }
    currentNext.next = node
  }
  addFirstNode(val) {
    const node = new Node(val)
    this.head = node
    this.tail = node
    return node
  }
  countNodes() {
    let nodeCount = 0
    let currentNext = this.head
    while (currentNext) {
      nodeCount++
      currentNext = currentNext.next
    }
    return nodeCount
  }
  *[Symbol.iterator]() {
    const values = []
    let currentNext = this.head
    while (currentNext) {
      values.push(currentNext)
      currentNext = currentNext.next
    }
    yield* values.map(node => {
      node = { ...node }
      delete node.next
      return node
    })
  }
}
