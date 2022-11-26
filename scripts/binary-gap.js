/**
 * Find the largest binary gap - longest streak of consecutive zeroes between 1's in the binary conversion of a Number
 * Solution for Codility https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
 * @param {Number} N
 * @returns {Number} Length of the longest binary gap (consecutive zeroes)
 */
function solution (N) {
  if (N < 0) {
    return 0
  }

  if (isNaN(N)) {
    return 0
  }

  // Convert N to binary
  let binary = []
  let number = N
  let longest = 0

  do {
    const digit = number % 2
    binary.push(digit)
    number = Math.floor(number / 2)
  } while (number !== 0)

  binary = [...binary.reverse()]

  // Check if the binary number has at least 2 (1)'s
  if (binary.map(x => x === 1).length < 2) {
    return 0
  }

  // Find the longest streak of zeroes
  let index = binary.indexOf(1)

  do {
    if (binary[index] === 1) {
      const remaining = binary.slice(index + 1)

      if (remaining[0] === 0) {
        const nextIndex = remaining.indexOf(1)
        if (nextIndex > longest) {
          longest = nextIndex
        }
      }
    }

    index += 1
  } while (index < binary.length)

  console.log(`${N} = ${binary.toString().replace(/,/g, '')}, ---longest streak: ${longest}`)
  return longest
}

module.exports = solution
