// Test values for "scripts/format-duration.js"

module.exports = [
  { input: 1, answer: '1 second' },
  { input: 120, answer: '2 minutes' },
  { input: 62, answer: '1 minute and 2 seconds' },
  { input: 3600, answer: '1 hour' },
  { input: 3662, answer: '1 hour, 1 minute and 2 seconds' }
]