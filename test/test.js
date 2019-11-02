const assert = require('assert')
const method = require('../scripts')
const tests = require('./test-values')

// Mixed Fractions
/*
tests.mixedFraction.forEach((item, index) => {
  it(`Test Passed: Value === ${item.answer}`, () => {
    assert.equal(method.mixedFraction(item.input), item.answer)
  })
})
*/

// Date Conversion
/*
tests.formatDuration.forEach((item, index) => {
  it(`Test Passed: Value === ${item.answer}`, () => {
    assert.equal(method.formatDuration(item.input), item.answer)
  })
})
*/

// String to Integer Conversion
/*
tests.parseStringInt.forEach((item, index) => {
  it(`Test Passed: Value === ${item.answer}`, () => {
    assert.equal(method.parseStringInt(item.input), item.answer)
  })
})
*/

// Sum of Numbers with Prime Factors
/*
tests.sumByFactors.forEach((item, index) => {
  it(`Test Passed: Value === ${item.answer}`, () => {
    assert.equal(method.sumByFactors(item.input).toString(), item.answer.toString())
  })
})
*/

// Smallest Number
/*
tests.smallestTest.forEach((item, index) => {
  it(`Test Passed: Value === ${item.answer}`, () => {
    assert.equal(method.smallest(item.input).toString(), item.answer.toString())
  })
})
*/

// Top (3) Words from a Sentence
tests.topThreeWords.forEach((item, index) => {
  it(`Test Passed: Value === ${item.answer}`, () => {
    assert.equal(method.topThreeWords(item.input).toString(), item.answer.toString())
  })
})