  /**
   * Find the repeating sequence of a number starting from index 0.
	 * Use this to check if the decimal value is repeating, and get the repeating digits
   * @param {Number|String} number - Integer or String sequence of numbers
   * @returns {String} the repeating digits from the input starting from index 0.
   * @returns {undefined} if there are no repeating sequence 
   */
  const findRepeating = function(number) {
	  let highest = 0
	  let repeat = undefined
	  let seq = {}
	  let numstr = number.toString()

	  for (i=0; i<numstr.length; i++) {
	    let str = numstr.substr(0, i+1)
	    let substrs = Math.floor((numstr.length - str.length) / str.length)
	  
	    // TO-DO: Maybe we can use regex here
	    if (substrs > 0) {
		    for (j=0; j<substrs; j++) {
					let comp = numstr.substr(i+1, str.length)
		      if (str === comp) {
						console.log(`${str} === ${comp}`)
			      seq[str] = (seq[str] === undefined) ? 1 : seq[str] + 1
		      }
		    }
	    }
	  }
	
	  for (key in seq) {
	    if (seq[key] > highest) {
	      highest = seq[key]
		    repeat = key
	    }
	  }
	
		// TO-DO: Bug - repeaating is detected on sequences like "330123456"
	  return repeat
  }

  module.exports = findRepeating