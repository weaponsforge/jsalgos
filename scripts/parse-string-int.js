/**
 * Converts an English string of a number to its numerical value
 * @param {String} string English string of a Number (Integer only) between 0 - 1000000 
 * @returns {Number} the Number conversion of the string input
 */
function parseInt(string) {
  const dictionary = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000
  }

  const tokens = string.split(' ')
  let sum = 0
  let segments = []

  if (tokens.length === 1 && tokens[0].indexOf('-') === -1) {
    return dictionary[tokens[0]]
  }

  tokens.map((x) => {
    let value = undefined

    if (dictionary[x] !== undefined) {
      // Find conversion for known digits
      value = dictionary[x]
    } else if (x !== 'and') {
      // Find conversion for 2-digit numbers
      let double = x.split('-')

      if (double.length === 2) {
        value = dictionary[double[0]] + dictionary[double[1]]
      }
    }

    if (value !== undefined) {
      if (sum === 0) {
        sum = value
      } else {
        if ([1000, 1000000].indexOf(value) === -1) {
          if (value % 10 === 0 && value !== 10) {
            sum = sum * value
          } else {
            sum = sum + value
          }
        } else {
          segments.push(sum * value)
          sum = 0
        }
      }
    }
    return value
  }).filter(x => x !== undefined)
  
  return segments.reduce((a, b) => a + b, 0) + sum
} 

module.exports = parseInt