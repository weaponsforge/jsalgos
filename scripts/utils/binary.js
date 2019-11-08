const Binary = {
  /**
    * Converts a string of binary sequence into its number format
    * @param {String} n Binary sequence representation of a Number in String format
    * @returns {Number} 
    *  - The number conversion of the binary string. 
    *  - Returns (-1) if the input cannot be converted.
    */    
  toNumber: function(n) {
    if (!n) {
      return -1
    }
  
    // Check if Binary
    if (!((n.toString().match(/[2-9a-zA-Z]/g)||[]).length === 0 && typeof n === 'string')) {
      return -1
    }

    let number = n.toString().split('').map(Number).reverse().reduce((acc, item, index) => {
      if (item === 1) {
        acc += (index === 0) ? 1 : eval('2*'.repeat(index).substr(0, 2 * index - 1))
      }    
      return acc
    })
  
    return number       
  },


  /**
   * Converts a Number into Binary format
   * @param {Number} n Any (integer) Number
   * @returns {String} Binary number conversion of the input Number 
   * @returns {Number} Returns (-1) if the input cannot be converted.
   */
  toBinary: function(n) {
    let arr = []
    let number = n

    if (!n || typeof n !== 'number' || (n.toString().match(/[.]/g)||[]).length > 0) {
      return -1
    }

    do {
      arr.push((number % 2 === 0) ? 0 : 1)
      number = Math.floor(number / 2)
    } while (number !== 0)

    return arr.reverse().join('').toString()
  },
}

module.exports = Binary