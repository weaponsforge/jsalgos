const { factors } = require('./utils')

/**
 * Generate a list of all prime factors from array elements matched with the sum
 * of array element(s) to which it is a prime factor of
 * @param {Array} lst Number Array 
 * @returns {Array} An array that contains Arrays of all prime factors with sum of 
 * original array elements to which it is a prime factor
 */
function sumOfDivided(lst) {
  let temp = {}
  let ans = []

  lst.forEach((item, index) => {
    factors(item).filter((x) => {
      if (factors(x).length === 1) {
        if (temp[x] === undefined) {
          temp[x] = item
        } else {
          temp[x] += item
        }
      }
    })
  })

  for (key in temp) {
    ans.push([parseInt(key), temp[key]])
  }

  return ans
}
 
module.exports = sumOfDivided