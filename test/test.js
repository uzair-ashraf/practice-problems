/* eslint-disable no-undef */
const chai = require('chai')
const { expect } = chai
const {
  isUnique
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
})
