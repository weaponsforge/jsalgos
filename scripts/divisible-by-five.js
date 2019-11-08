const { Binary } = require('./utils')

function divisibleByFive(n) {
  if (!n) {
    return false
  }
  
  const isBinary = (n.toString().match(/[2-9]/g)||[]).length === 0 && typeof(n) === 'string'

  if (!isBinary) {
    return (parseInt(n) % 5 === 0)
  } else {
    // Convert binary to number then check if divisible by 5
    let number = n.split('').map(Number).reverse().reduce((acc, item, index) => {
      if (item === 1) {
        acc += (index === 0) ? 1 : "2".repeat(index).split('').map(Number).reduce((a, b) => a * b)
      }    
      return acc
    })

    let c = Binary.toNumber(n)
    console.log(`converted: ${c}`)
    return (number % 5 === 0)
  }
}

module.exports = divisibleByFive