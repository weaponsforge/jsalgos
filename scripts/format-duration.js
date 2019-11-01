function formatDuration (seconds) {
  let second = 1
  let minute = 60
  let hour = 60 * minute
  let day = 24 * hour
  let month = 30 * day
  let year = 365 * day
  
  let timeInSec = {
    second: 1,
    minute: 60 * second,
	  hour: 60 * minute,
	  day: 24 * hour,
	  month: 30 * day,
	  year: 365 * day
  }
  
  // Get the base time given time in seconds
  let getBaseTime = function(secs, container) {
	  let final = {}
    
    // Get the highest format of base time
    for (let key in timeInSec) {
	    let mainTime = (Math.floor(secs / timeInSec[key])).toFixed(3)
	    let remainderTime = (Math.floor(secs % timeInSec[key])).toFixed(3)
	
	    if (mainTime >= "1.000") {
	      final = {}
	      final.key = key
	      final.value = mainTime
	      final.mod = remainderTime
	      final.keyMod = Object.keys(timeInSec)[Object.keys(timeInSec).indexOf(key) - 1]
	    }
    }
	
	  container.push({key: final.key, value: final.value})
	  if (final.mod > "0.000") {
      // recursively extract the smallest base time, while keeping track of "valid" final times
	    return getBaseTime(parseFloat(final.mod), container)
	  } else {
      // exit recursion with final time key names and values
	    return container
	  }
  }
  
  if (seconds === 0 ) {
    return 'now'
  } 
    
  // Get human readable time data in json format
  let time = getBaseTime(seconds, [])
  
  // Merge months and days, because months should be ignored
  let merged = {key: 'day', value: 0}
  time.forEach((item, index) => {
    if (item.key === 'month') {
	    merged.value += 30 * parseInt(item.value)
	  } else if (item.key === 'day') {
	    merged.value += parseInt(item.value)
	  }
  })
  
  // Find the array index of 'month' and/or 'day' from unfiltered result
  let md = {}
  time.forEach((item, index) => {
    if (item.key === 'month' || item.key === 'day') {
      md[item.key] = index
    }
  })
  
  // Delete 'month', overwrite 'day'
  if (md.month !== undefined) {
    time[md.day].value = merged.value
    time.splice(md.month, 1)   
  } 
  
  // Format the string return value
  let str = ''
  time.forEach((item, index) => {
    let t = parseInt(item.value)
	  str += t
	  str += ' ' + item.key
	
	  if (t > 1) {
	    str += 's'
	  }
	
	  if (index < time.length - 2) {
	    str += ', '
	  } else if (index < time.length - 1){
      str += ' and '
	  }
  })
    
  return str
}

module.exports = formatDuration