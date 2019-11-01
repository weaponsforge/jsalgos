/**
 * Returns a number's factors
 * @param {Number} n Number to find the factors from
 * @returns {Array} Returns the input number's factors
 */
const factors = function(n) {
  let fac = []
  for (i=1; i<=n; i++){
    fac.push((n%i == 0) ? (n/i) : 0)
  }
  return fac.filter(x => [0,1].indexOf(x) === -1)
}

module.exports = factors