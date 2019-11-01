const assert = require('assert')
const method = require('../scripts')
const tests = require('./test-values')

tests.mixedFraction.forEach((item, index) => {
  it(`Test Passed: Value === ${item.answer}`, () => {
    assert.equal(method.formatDuration(item.input), item.answer)
  })
})