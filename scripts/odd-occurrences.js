// Solution for Codility https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
/**
  Problem description:

  A non-empty array A consisting of N integers is given.
  The array contains an odd number of elements,
  and each element of the array can be paired with another element that has the same value,
  except for one element that is left unpaired.

  Goal is to write a function that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.
 */
function solution (A) {
  const N = A.length

  if (N === 0) {
    // Empty A
    return A
  }

  if (N % 2 === 0 || N > 1000000) {
    // A does not contain an odd number of elements
    return A
  }

  if (A.find(x => (x < 1 || x > 1000000))) {
    // An A element is too small or too large
    return A
  }

  // Find unique elements
  const one = []

  for (let i = 0; i < A.length; i += 1) {
    const num = A[i]
    const index = one.indexOf(num)

    if (index === -1) {
      one.push(num)
    } else {
      one.splice(index, 1)
    }
  }
  // Find the unpaired number
  return one[0]
}

module.exports = solution
