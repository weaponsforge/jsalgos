/**
 * Converts input time input in seconds into a human-readable format
 * @param {Number} seconds
 * @returns {String} A human-readable time conversion format
 */

function formatDuration (seconds) {
  const second = 1
  const minute = 60
  const hour = 60 * minute
  const day = 24 * hour
  const temp = []
  
  let timeInSec = {
    year: 365 * day,
    day: 24 * hour,
    hour: 60 * minute,
    minute: 60 * second,
    second: 1
  }

  let time = seconds
  let converted = ''

  if (seconds === 0) {
    return 'now'
  } 

  for (let key in timeInSec) {
    let t = Math.floor(time / timeInSec[key])
    if (t > 0) {
      let str = t + ' ' + key + ((t > 1) ? 's' : '')
      temp.push(str)
    }
    time = time % timeInSec[key]
  }

  if (temp.length === 1) {
    converted = temp[0]
  } else {
    temp[temp.length - 1] = 'and ' + temp[temp.length - 1]
    converted = temp.join(', ')
    converted = converted.replace(', and', ' and')
  }

  return converted
}

module.exports = formatDuration