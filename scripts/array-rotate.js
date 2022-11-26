// Solution for Codility https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
function rotateArray(A, K) {
  const N = A.length

  if (N <= 0 || N > 100) {
    return A
  }

  if (K < 0 || K > 100) {
    return A
  }

  if (A.find(x => (x < -1000 || x > 1000))) {
    return A
  }

  temp = [A[A.length - 1]]

  for (let i = 0; i < A.length - 1; i += 1) {
    temp.push(A[i])
  }

  let s = K - 1

  if (s > 0) {
    console.log(temp)
    return rotateArray(temp, s)
  } else {
    console.log(temp)
    return temp
  }
}

module.exports = rotateArray
