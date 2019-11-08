https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/train/javascript
/**
 * Returns the next bigger Number that can be formed from the input number's digits
 * @param {Number} n Any Number digit, no Floats 
 * @returns {Number} Next bigger number
 */
function nextBigger(n){
  console.log(`INPUT: ${n}`)
  let digits = n.toString().split('').map(Number)
  let slice = (digits.length === 2) ? 0 : 1

  let next = digits.slice(slice, digits.length)
  let compare = 0

  if (digits.length === 2) {
    next = parseInt(digits.sort((a, b) => b - a).join(''))
    compare = next
  } else if (digits.length > 2) {
    next = parseInt(digits.slice(1, digits.length).sort((a, b) => b - a).join(''))
    compare = parseInt(digits[0] + '' +  next)
  }
  console.log(`next: ${next}, compare: ${compare}`)



  return (n === compare || digits.length === 1) ? -1 : compare
}

module.exports = nextBigger