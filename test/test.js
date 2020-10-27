/* eslint-disable no-undef */
const chai = require('chai')
const { expect } = chai
const {
  isUnique,
  checkPermutation,
  urlify,
  palindromePermutation,
  oneAway,
  stringCompression
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
})
