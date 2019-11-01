// Test values for "scripts/parse-string-int.js"

module.exports = [
  { input: 'one', answer: 1 },
  { input: 'twenty', answer: 20 },
  { input: 'two hundred forty-six', answer: 246 },
  { input: 'seven hundred eighty-three thousand nine hundred and nineteen', answer: 783919 },
  { input: 'seven hundred eighty-three thousand', answer: 783000 },
  { input: 'twenty-one', answer: 21 },
  { input: 'two hundred thousand and three', answer: 200003},
  { input: 'nine hundred thirty-five thousand two hundred ten', answer: 935210 },
  { input: 'three hundred and thirty-nine thousand two hundred ten', answer: 339210 }
]