module.exports = class HashTable {
  constructor() {
    this.size = 13
    this.table = new Array(this.size)
    this.itemCount = 0
    this.hashPrime = 23
  }
  get loadFactor() {
    return this.itemCount / this.size
  }
  increaseTableSize() {
    const oldTable = this.table
    this.size *= 2
    this.table = new Array(this.size)
    oldTable.forEach(item => {
      item.forEach(([key, value]) => {
        const hash = this.hashKey(key)
        if (this.table[hash]) {
          this.table[hash].push([key, value])
        } else {
          this.table[hash] = [[key, value]]
        }
      })
    })
  }
  hashKey(key) {
    let value = 0
    for(let i = 0; i < key.length; i++) {
      value += (13 * this.hashPrime * key.charCodeAt(i)) % this.size
    }
    return value
  }
  set(key, value) {
    const hash = this.hashKey(key)
    this.itemCount++
    if(this.loadFactor > .8) {
      this.increaseTableSize()
    }
    if(this.table[hash]) {
      this.table[hash].push([key, value])
    } else {
      this.table[hash] = [[key, value]]
    }
  }
  get(key) {
    const hash = this.hashKey(key)
    if(!this.table[hash]) return null;
    return this.table[hash].find(item => item[0] === key)[1]
  }
  has(key) {
    const hash = this.hashKey(key)
    if (!this.table[hash]) return false;
    return this.table[hash].some(item => item[0] === key)
  }
  delete(key) {
    const hash = this.hashKey(key)
    if (!this.table[hash]) return false;
    this.table[hash] = this.table[hash].filter(([itemKey]) => itemKey !== key)
    this.itemCount--
    return true
  }
}
