// Test values for "scripts/top-three-words.js

module.exports = [
  { input: 'a a a  b  c c  d d d d  e e e e e', answer: ['e','d','a'] },
  { input: 'a a c b b', answer: ['a','b','c'] },
  { input: 'e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e', answer: ['e','ddd','aa'] },
  { input: "  //wont won't won't ", answer: ["won't", "wont"] },
  { input: '  , e   .. ', answer: ["e"] },
  { input: '  ...  ', answer: [] },
  { input: "  '  ", answer: [] },
  { input: `In a village of La Mancha, the name of which I have no desire to call to
  mind, there lived not long since one of those gentlemen that keep a lance
  in the lance-rack, an old buckler, a lean hack, and a greyhound for
  coursing. An olla of rather more beef than mutton, a salad on most
  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  on Sundays, made away with three-quarters of his income.`, answer: ['a','of','on'] }
]