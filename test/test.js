/* eslint-disable no-undef */
const chai = require('chai')
const { expect } = chai
const {
  isUnique,
  checkPermutation,
  urlify,
  palindromePermutation
} = require('../problems')

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
  // Input: "Mr John Smith JJ, 13
// Output: "Mr%2eJohn%2eSmith"
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
})
