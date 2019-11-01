const { findRepeating, factors }= require('./utils')

/**
 * Converts a fraction to its lowest terms mixed fraction form
 * @param {String} n Fraction or whole number String. Fractions are separated by a "/"
 * @returns {String} lowest term fraction
 */
function mixedFraction(n) {
  let isFraction = (n.indexOf('/') > 0)
  let answer = ''
  console.log(`input: ${n}`)
  console.log(`isFraction: ${isFraction}`)

  if (isFraction) {
    let inputFraction = n.split('/').map(Number)
    
    // Division by 0 error
    if (inputFraction[1] === 0) {
      throw new Error('Division by 0 is not allowed')
    }

    let evaluated = eval(n)
    answer += (evaluated === 0) ? evaluated : ''
    console.log(`evaluated: ${evaluated}`)
    
    let whole = Math.floor(Math.abs(evaluated)) * ((Math.floor(evaluated) < 0) ? -1 : 1)
    let decimal = 0
    let fraction = []

    if (evaluated === 0) {
      return evaluated
    } else if (Math.abs(whole) >= 1) {
      // Evaluated input has a whole number
      answer += whole
      decimal = evaluated - whole
      console.log(`decimal: ${decimal}`)

      if (Math.abs(decimal) > 0) {
        let decimalDigits = decimal.toString().substr(decimal.toString().indexOf('.') + 1, decimal.toString().length)
        let repeating = findRepeating(decimalDigits)

        if (repeating !== undefined) {
          // Decimal is repeating
          fraction[0] = repeating
          fraction[1] = Math.pow(10, repeating.toString().length) - 1
          console.log(`repeating: ${repeating}`)
        } else {
          fraction[0] = parseInt(decimalDigits)
          fraction[1] = Math.pow(10, decimal.toString().length)
        }
      }
    } else {
      // Evaluated input is a decimal less than 1
      decimal = evaluated
      fraction = inputFraction
    }

    // Find the fraction's lowest term
    if (fraction.length > 0 && evaluated !== 0) {
      let a = factors(fraction[0])
      let b = factors(fraction[1])
      //console.log(a)
      //console.log(b)
  
      // Lowest term
      let divisor = Math.max(...a.filter(x => b.includes(x)))
      console.log(`whole: ${whole}, decimal: ${decimal}`)
      // console.log(`divisor: ${divisor}`)
      answer += (answer.length > 0) ? ' ' : '' 
      answer += fraction[0] / divisor + '/' + fraction[1] / divisor      
    }

    console.log(`answer: "${answer}"`)
    return answer
  } else {
    return n
  }
}

module.exports = mixedFraction