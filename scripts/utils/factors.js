/**
 * Returns a number's factors not including itself
 * @param {Number} n Number to find the factors from
 * @returns {Array} Returns the input number's factors
 */
const factors = function(n) {
  let fac = []
  let number = Math.abs(n)
  for (i=1; i<=number; i++){
    fac.push((number%i == 0) ? (number/i) : 0)
  }
  return fac.filter(x => [0,1].indexOf(x) === -1)
}

module.exports = factors