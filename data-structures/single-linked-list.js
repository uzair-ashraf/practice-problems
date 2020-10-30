class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

module.exports = class SingleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  add(val) {
    if(!this.head) return this.addFirstNode(val)
    const node = new Node(val)
    this.tail = node
    let currentNext = this.head
    while(currentNext.next) {
      currentNext = currentNext.next
    }
    currentNext.next = node
    return true
  }
  remove(val) {
    const nodeIndex = this.indexOf(val)
    let nodeCounter = 0
    if(nodeIndex === -1) return false;
    if(!nodeIndex) {
      if(this.head === this.tail) {
        this.tail = null
        this.head = null
      } else {
        this.head = this.head.next
      }
    } else {
      let currentNext = this.head
      while(nodeIndex - 1 !== nodeCounter) {
        currentNext = currentNext.next
        nodeCounter++
      }
      currentNext.next = currentNext.next.next
    }
    return true
  }
  indexOf(val) {
    let nodeCounter = 0
    let currentNext = this.head
    while(currentNext) {
      if(currentNext.val === val) {
        return nodeCounter
      } else {
        nodeCounter++
        currentNext = currentNext.next
      }
    }
    return -1
  }
  addFirstNode(val) {
    const node = new Node(val)
    this.head = node
    this.tail = node
    return true
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
  * [Symbol.iterator]() {
    const values = []
    let currentNext = this.head
    while (currentNext) {
      values.push(currentNext)
      currentNext = currentNext.next
    }
    yield* values.map(node => {
      node = {...node}
      delete node.next
      return node
    })
  }
}
