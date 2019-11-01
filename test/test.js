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
tests.parseStringInt.forEach((item, index) => {
  it(`Test Passed: Value === ${item.answer}`, () => {
    assert.equal(method.parseStringInt(item.input), item.answer)
  })
})