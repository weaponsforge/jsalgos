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
tests.formatDuration.forEach((item, index) => {
  it(`Test Passed: Value === ${item.answer}`, () => {
    assert.equal(method.formatDuration(item.input), item.answer)
  })
})