/* eslint-disable no-undef */
const chai = require('chai')
const crypto = require('crypto')
const { expect } = chai
const {
  isUnique,
  checkPermutation,
  urlify,
  palindromePermutation,
  oneAway,
  stringCompression,
  rotateMatrix,
  isSubstring,
  removeDups
} = require('../problems')
const {
  HashTable,
  SingleLinkedList
} = require('../data-structures')

describe('Data Structures Tests', () => {
  describe('Hash Tables', () => {
    const table = new HashTable()
    it('Should return an instance of a Hash Table', done => {
      expect(table instanceof HashTable).to.be.true
      done()
    })
    it('Should have an item count of three items', done => {
      table.set('firstName', 'Uzair')
      table.set('lastName', 'Ashraf')
      table.set('age', 26)
      expect(table.itemCount).to.equal(3)
      done()
    })
    it('Should double in size', done => {
      const size = table.size
      while(size === table.size) {
        const randomKey = crypto.randomBytes(20).toString('hex');
        const randomValue = Math.random().toString(36).substr(2, 5);
        table.set(randomKey, randomValue)
      }
      expect(size * 2 === table.size).to.be.true
      done()
    })
    it('Should return value Uzair for firstName key', done => {
      expect(table.get('firstName')).to.equal('Uzair')
      done()
    })
    it('Should return null for meow key', done => {
      expect(table.get('meow')).to.be.a('null')
      done()
    })
    it('Should return true having the key for lastName', done => {
      expect(table.has('lastName')).to.be.true
      done()
    })
    it('Should return false having the key for mikumiku', done => {
      expect(table.has('mikumiku')).to.be.false
      done()
    })
    it('Should return false deleting a key that doesnt exist', done => {
      expect(table.delete('mikumiku')).to.be.false
      done()
    })
    it('Should delete the key age', done => {
      const previousItemCount = table.itemCount
      expect(table.delete('age')).to.be.true
      expect(previousItemCount - 1).to.equal(table.itemCount)
      done()
    })
    it('Should no longer have the age key', done => {
      expect(table.has('age')).to.be.false
      done()
    })
    it('Should double in size again', done => {
      const size = table.size
      while (size === table.size) {
        const randomKey = crypto.randomBytes(20).toString('hex');
        const randomValue = Math.random().toString(36).substr(2, 5);
        table.set(randomKey, randomValue)
      }
      expect(size * 2 === table.size).to.be.true
      done()
    })
  })
  describe('Single Linked Lists', () => {
    const linkedList = new SingleLinkedList()
    it('Should return an instance of a Single Linked List', done => {
      expect(linkedList instanceof SingleLinkedList).to.be.true
      done()
    })
    it('Should add a node to the end of the list', done => {
      linkedList.add('hello')
      expect(linkedList.head === linkedList.tail).to.be.true
      done()
    })
    it('Should have next null for the head', done => {
      expect(linkedList.head.next).to.be.a('null')
      done()
    })
    it('Should a node count of 1', done => {
      expect(linkedList.countNodes()).to.equal(1)
      done()
    })
    it('Should add three nodes to the end of the list', done => {
      linkedList.add('bye')
      linkedList.add('meow')
      linkedList.add('rawr')
      expect(linkedList.countNodes()).to.equal(4)
      done()
    })
    it('Should return 1 for bye using indexOf', done => {
      expect(linkedList.indexOf('bye')).to.equal(1)
      done()
    })
    it('Should return -1 for meowmeow using indexOf', done => {
      expect(linkedList.indexOf('meowmeow')).to.equal(-1)
      done()
    })
    it('Should spread into an array with four items', done => {
      const arr = [...linkedList]
      const arr2 = Array.from(linkedList)
      expect(arr.length).to.equal(4)
      expect(arr2.length).to.equal(4)
      done()
    })
    it('Should remove all values', done => {
      expect(linkedList.indexOf('hello')).to.equal(0)
      expect(linkedList.remove('hello')).to.be.true
      expect(linkedList.indexOf('hello')).to.equal(-1)
      expect(linkedList.indexOf('bye')).to.equal(0)
      expect(linkedList.remove('bye')).to.be.true
      expect(linkedList.indexOf('bye')).to.equal(-1)
      expect(linkedList.indexOf('meow')).to.equal(0)
      expect(linkedList.remove('meow')).to.be.true
      expect(linkedList.indexOf('meow')).to.equal(-1)
      expect(linkedList.indexOf('rawr')).to.equal(0)
      expect(linkedList.remove('rawr')).to.be.true
      expect(linkedList.indexOf('rawr')).to.equal(-1)
      expect(linkedList.countNodes()).to.equal(0)
      done()
    })
  })
})

describe('Practice Problem Tests', () => {
  describe('isUnique', () => {
    it('Should return true for string hello', done => {
      expect(isUnique('hello')).to.be.false
      done()
    })
    it('Should return false for string maam', done => {
      expect(isUnique('maam')).to.be.false
      done()
    })
    it('Should return true for string tim', done => {
      expect(isUnique('tim')).to.be.true
      done()
    })
  })
  describe('checkPermutation', () => {
    it('Should return true for strings hello and loleh', done => {
      expect(checkPermutation('hello', 'loleh')).to.be.true
      done()
    })
    it('Should return false for strings hello and world', done => {
      expect(checkPermutation('hello', 'world')).to.be.false
      done()
    })
    it('Should return true for two weird strings', done => {
      expect(checkPermutation('abdfdfdfdfd', 'dfdfdfdfdba')).to.be.true
      done()
    })
  })
  describe('urlify', () => {
    it('Should return Mr%20John%20Smith for Mr John Smith', done => {
      expect(urlify('Mr John Smith  ', 13)).to.equal('Mr%20John%20Smith')
      done()
    })
  })
  describe('palindromePermutation', () => {
    it('Should return true for Tact Coa', done => {
      expect(palindromePermutation('Tact Coa')).to.equal(true)
      done()
    })
    it('Should return true for reca arc', done => {
      expect(palindromePermutation('reca aRc')).to.equal(true)
      done()
    })
    it('Should return false for timothy davis', done => {
      expect(palindromePermutation('timothy davis')).to.equal(false)
      done()
    })
  })
  describe('oneAway', () => {
    it('Should return true for pale and ple', done => {
      expect(oneAway('pale', 'ple')).to.equal(true)
      done()
    })
    it('Should return true for pales and pale', done => {
      expect(oneAway('pales', 'pale')).to.equal(true)
      done()
    })
    it('Should return true for pale and bale', done => {
      expect(oneAway('pale', 'bale')).to.equal(true)
      done()
    })
    it('Should return false for pale and bae', done => {
      expect(oneAway('pale', 'bae')).to.equal(false)
      done()
    })
  })
  describe('stringCompression', () => {
    it('Should return a2b1c5a3 for aabcccccaaa', done => {
      expect(stringCompression('aabcccccaaa')).to.equal('a2b1c5a3')
      done()
    })
    it('Should return m1e1o1w1 for meow', done => {
      expect(stringCompression('meow')).to.equal('m1e1o1w1')
      done()
    })
    it('Should return o1h1n1o5 for ohnooooo', done => {
      expect(stringCompression('ohnooooo')).to.equal('o1h1n1o5')
      done()
    })
    it('Should return t1i1m1o1t1h1y1s1t1e1v1e1n1d1a1v1i1s1 for timothystevendavis', done => {
      expect(stringCompression('timothystevendavis')).to.equal('t1i1m1o1t1h1y1s1t1e1v1e1n1d1a1v1i1s1')
      done()
    })
  })
  describe('rotateMatrix', () => {
    let starterMatrix = [
        [10, 7, 8, 12],
        [15, 75, 85, 152],
        [11, 17, 18, 121],
        [1340, 57, 38, 512],
      ]
      let matrixAfterRotation = null
    it('Should rotate the matrix 90 degrees', done => {
      const rotatedMatrix = rotateMatrix(starterMatrix)
      expect(rotatedMatrix)
      .to
      .deep
      .equal([
        [1340, 11, 15, 10],
        [57, 17, 75, 7],
        [38, 18, 85, 8],
        [512, 121, 152, 12],
      ])
      matrixAfterRotation = rotatedMatrix
      done()
    })
    it('Should rotate the matrix 180 degrees', done => {
      const rotatedMatrix = rotateMatrix(matrixAfterRotation)
      expect(rotatedMatrix)
        .to
        .deep
        .equal([
          [512, 38, 57, 1340],
          [121, 18, 17, 11],
          [152, 85, 75, 15],
          [12, 8, 7, 10],
        ])
      matrixAfterRotation = rotatedMatrix
      done()
    })
    it('Should rotate the matrix 270 degrees', done => {
      const rotatedMatrix = rotateMatrix(matrixAfterRotation)
      expect(rotatedMatrix)
        .to
        .deep
        .equal([
          [12, 152, 121, 512],
          [8, 85, 18, 38],
          [7, 75, 17, 57],
          [10, 15, 11, 1340],
        ])
      matrixAfterRotation = rotatedMatrix
      done()
    })
    it('Should rotate the matrix back to its original position', done => {
      const rotatedMatrix = rotateMatrix(matrixAfterRotation)
      expect(rotatedMatrix)
        .to
        .deep
        .equal(starterMatrix)
      done()
    })
  })
  describe('isSubstring', () => {
    it('Should return true for pale and ple', done => {
      expect(isSubstring('pale', 'ple')).to.equal(true)
      done()
    })
    it('Should return true for fart and f', done => {
      expect(isSubstring('fart', 'f')).to.equal(true)
      done()
    })
    it('Should return true for cupertino and cut', done => {
      expect(isSubstring('cupertino', 'cut')).to.equal(true)
      done()
    })
    it('Should return false for happy and sad', done => {
      expect(isSubstring('happy', 'sad')).to.equal(false)
      done()
    })
    it('Should return false for tim and chim', done => {
      expect(isSubstring('tim', 'chim')).to.equal(false)
      done()
    })
  })
  describe('removeDups', () => {
    it('Should have only two items in the linked list', done => {
      const linkedList = new SingleLinkedList()
      linkedList.add('meow')
      linkedList.add('nyan')
      linkedList.add('meow')
      linkedList.add('nyan')
      linkedList.add('meow')
      expect(removeDups(linkedList).countNodes()).to.equal(2)
      done()
    })
  })
})
