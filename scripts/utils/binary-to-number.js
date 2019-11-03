/**
 * Converts a string of binary sequence into its number format
 * @param {String} n Binary sequence representation of a Number
 * @returns {Number} 
 *  - The number conversion of the binary string. 
 *  - Returns (-1) if the input cannot be converted.
 */
const binaryToNumber = function(n) {
  const isBinary = (n.toString().match(/[2-9]/g)||[]).length === 0 && typeof(n) === 'string'
  
  if ([undefined, null, ''].indexOf(n) >= 0 && !isBinary) {
    return -1
  } else {
    let number = n.split('').map(Number).reverse().reduce((acc, item, index) => {
      if (item === 1) {
        acc += (index === 0) ? 1 : "2".repeat(index).split('').map(Number).reduce((a, b) => a * b)
      }    
      return acc
    })

    return number 
  }
}

module.exports = binaryToNumber