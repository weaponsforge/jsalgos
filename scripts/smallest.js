/**
 * Get the smallest combination from the input number while moving only (1) digit
 * @param {Number} n Any Number input 
 * @returns {Array} Array of Numbers where:
 *  [0] - Containins the smallest combination from the input
 *  [1] - index of the removed digit
 *  [2] - index where the removed digit was inserted
 */
function smallest(n) {
  let arr = n.toString().split('').map(Number)
  let small = n
  let index = arr.length
  let indexAdd = -1

  for (i=0; i<arr.length; i++) {
    // Reset
    let temp = [...arr]

    // Iterate current digit's position
    for (j=0; j<arr.length; j++) {
      if (j === 0) {
        // Remove digit and put to first position in array
        let restore = temp.splice(i, 1)[0]
        temp.unshift(restore)
      } else {
        let orig = temp[j]
        temp[j] = temp[j-1]
        temp[j-1] = orig
      }

      let newdigits = parseInt(temp.join(''))

      // Find the smallest and required indices
      if (newdigits <= small) {
        if (newdigits === small) {
          if (i < index) {
            index = i
            indexAdd = j
          }
        } else {
          index = i
          indexAdd = j
        }
        small = newdigits
      }
    }
  }

  return [small, index, indexAdd]
}

module.exports = smallest