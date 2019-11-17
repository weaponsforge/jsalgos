// Test values for "scripts/dependency-injection.js"
const { DI } = require('../../scripts/')

const deps = {
  'dep1': function () {return 'this is dep1';},
  'dep2': function () {return 'this is dep2';},
  'dep3': function () {return 'this is dep3';},
  'dep4': function () {return 'this is dep4';}
}

const di = new DI(deps)

module.exports = [
  {
    input: (di.inject(function (dep3, dep1, dep2) {
      return [dep1(), dep2(), dep3()].join(' -> ');
    }))(),
    answer: 'this is dep1 -> this is dep2 -> this is dep3'
  },
  {
    input: (di.inject(function() {
      return arguments.length
    }))(),
    answer: 0
  }
]