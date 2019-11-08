/**
 * Returns all possible combinations that can be formed from an input number
 * @param {Number} n Any positive number 
 * @param {Array} combinations Empty Array to store digit combinations calculated from recursion
 */
function digitCombinations(n, combinations) {
  let max = 0
  let digits = n.toString().split('').map(Number)

  for (i=1; i<=digits.length; i++) {
    max = (i === 1) ? i : max *= i
  } 

  console.log(max)
}

module.exports = digitCombinations

