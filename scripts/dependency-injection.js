/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies. 
 *  - keys are function names
 *  - values are functions
 */
var DI = function (dependency) {
  this.dependency = dependency
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  let args = func.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1].replace(/ /g, '').split(',')
  let deps = args.map(x => this.dependency[x]).filter(x => x != undefined)
  let self = this

  return function() {
    return deps.length === 0 ? func() : func.apply(self, deps)
  }
}

module.exports = DI