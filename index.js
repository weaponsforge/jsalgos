const { Binary } = require('./scripts/utils')

try {
  const a = Binary.toBinary(1.56)
  console.log(a)
} catch(error) {
  console.log(error)
}
