// push, place on the stack
// pop, remove off the top of the stack
// peek, show the next thing on the stack
// size, length

module.exports = class Stack {
  constructor() {
    this.storage = {}
    this.count = 0
  }
  get size() {
    return this.count
  }
  get isEmpty() {
    return !this.count
  }
  push(value) {
    this.storage[this.count++] = value
  }
  pop() {
    if(!this.count) return null
    const value = this.storage[this.count - 1]
    delete this.storage[--this.count]
    return value
  }
  peek() {
    if(!this.count) return null
    return this.storage[this.count - 1]
  }
}
