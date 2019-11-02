
/**
 * Get the top (3) most used words from a sentence input
 * @param {String} text Any regular sentence made of words
 * @returns {Array} Top (3) most used words
 */
function topThreeWords(text) {
  let words = text.toLowerCase().replace(/[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]/g, '').split(' ').filter(x => x.match(/[a-z]/g))
  let tokens = {}
  let temp = []

  words.forEach((item, index) => {
    if (tokens[item] === undefined) {
      tokens[item] = 1
    } else {
      tokens[item]++
    }
  })

  for (key in tokens) {
    temp.push({ word: key, count: tokens[key] })
  }

  temp = temp.sort((a, b) => b.count - a.count)
  if (temp.length < 0) {
    return []
  } else {
    return Array.from(temp, (x, index) => {
      if (index < (temp.length >= 3 ? 3 : temp.length)) {
        return temp[index].word
      }
    }).filter(x => x !== undefined)
  }
}

module.exports = topThreeWords