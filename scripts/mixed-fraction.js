const { factors }= require('./utils')

/**
 * Converts a fraction to its lowest terms mixed fraction form
 * @param {String} n Fraction or whole number String. Fractions are separated by a "/"
 * @returns {String} lowest term fraction
 */
function mixedFraction(n) {
  let isFraction = (n.indexOf('/') > 0)
  let answer = ''

  if (isFraction) {
    let inputFraction = n.split('/').map(Number)
    
    // Division by 0 error
    if (inputFraction[1] === 0) {
      throw new Error('Division by 0 is not allowed')
    }

    let evaluated = eval(n)
    let whole = Math.floor(Math.abs(evaluated)) * ((evaluated > 0) ? 1 : -1)
    let fraction = []
    answer += (evaluated === 0) ? evaluated : ''

    if (evaluated === 0) {
      return evaluated.toString()
    } else if (Math.abs(whole) >= 1) {
      // Evaluated input has a whole number
      let numerator = Math.abs(inputFraction[0]) - (Math.abs(whole) * Math.abs(inputFraction[1]))
      answer += whole

      if (numerator > 0) {
        fraction[0] = numerator
        fraction[1] = inputFraction[1]

        // Format trailing fraction as "positive"
        fraction = fraction.map(x => (x < 0) ? x * -1 : x)
      }
    } else {
      // Evaluated input is a decimal less than 1
      decimal = evaluated
      fraction = inputFraction

      if (fraction[1] < 0) {
        fraction = fraction.map(x => x * -1)
      }
    }

    if (fraction.length > 0) {
      let a = factors(fraction[0])
      let b = factors(fraction[1])
      let gcf = a.filter(x => b.includes(x))
      answer += (answer.length > 0) ? ' ' : ''

      if (gcf.length > 0) {
        let divisor = (gcf.length == 1) ? gcf[0] : Math.max(...gcf)
        answer += (fraction[0] / divisor) + '/' + (fraction[1] / divisor)
      } else {
        answer += fraction[0] + '/' + fraction[1]
      }
    }

    return answer.toString()
  } else {
    return n
  }
}

module.exports = mixedFraction