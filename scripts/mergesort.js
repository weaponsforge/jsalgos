/**
 * Sorts an array of unordered Numbers using merge sort
 * @param {Number[]} array - Array of unsorted Numbers
 * @returns {Number[]} Input array, sorted from lowest to highest
 */
const mergesort = (array) => {
  if (array.length === 1) {
    return array
  }

  const mid = Math.floor(array.length / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid)

  const m =  merge(
    mergesort(left),
    mergesort(right)
  )

  return m
}

/**
 * Sort and merge two (2) Number arrays
 * @param {Number[]} left - Right-side array of Number elements
 * @param {Number[]} right - Left-side array of Number elements
 * @returns {Number[]} Array of combined and sorted (left and right) Number arrays
 */
const merge = (left, right) => {
  let indexLeft = 0
  let indexRight = 0
  const newlist = []

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      newlist.push(left[indexLeft])
      indexLeft++
    } else {
      newlist.push(right[indexRight])
      indexRight++
    }
  }

  return newlist
    .concat(left.slice(indexLeft))
    .concat(right.slice(indexRight))
}

const main = () => {
  // 0-based
  const list = [1, 8, 7, 6, 5, 4, 3]
  const sorted = mergesort(list, 0, 6)
  console.log(sorted)
}

module.exports = mergesort
