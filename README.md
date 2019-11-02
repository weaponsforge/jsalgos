# jsalgos

> A collection of solutions to classic problems using javascript.  
> A boilterplate for basic javascript nodejs environment and methods testing with [**mocha**](https://mochajs.org/).


### Dependecies

1. NodeJS
	- version 10.16.3 was used for this project
2. Windows 10 OS 64-bit
3. VS Code
	- for debugging (breakpoints)


## Content

Methods and functions are saved inside the **/scripts** directory.

1. **format-duration.js** - [[link]](https://www.codewars.com/kata/52742f58faf5485cae000b9a)  
Accepts time input in seconds and returns a human-readable conversion format.

2. **mixed-fraction.js** - [[link]](https://www.codewars.com/kata/556b85b433fb5e899200003f)   
Converts a fraction to its lowest terms mixed fraction form.

3. **parse-string-int.js** - [[link]](https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5)  
Converts an English string of a number to its numerical value.

4. **sum-by-factors.js** - [[link]](https://www.codewars.com/kata/54d496788776e49e6b00052f)  
Generate a list of all prime factors from array elements matched with the sum of array element(s) to which it is a prime factor of.

5. **smallest.js** - [[link]](https://www.codewars.com/kata/find-the-smallest/javascript)  
Get the smallest combination from the input number while moving only (1) digit.

6. **top-three-words.js** - [[link]](https://www.codewars.com/kata/51e056fe544cf36c410000fb)  
Retrives the top (3) most used words from a sentence.



## Installation

1. Clone this repository.  
`https://github.com/weaponsforge/jsalgos.git`

2. Install dependencies.  
`npm install`



## Usage


### A. Create New Scripts

1. Create a new script for **module.exports** inside **/scripts/\*.js** following the format `<METHOD-NAME>.js`
2. Require the newly-created script inside **/scripts/index.js**
3. Refer to the **Testing** and **Debugging** sections to test your new script.



### B. Testing

1. To run current tests:  
`npm test`

2. To create or edit new tests:
	- Edit existing test values from **/test/test-values/\*.js** that corresponds as input to target functions from **/scripts/\*.js** For example, `mixedfraction-test.js` are valid test values for `format-duration.js` or
	- Create new test values following the format `<METHOD_NAME>-test.js` inside **/test/test-values/\*.js**. Add it as **modules.exports** to **/test/test-values/index.js**

3. Use the new or updated tests:
	- Open **/test/test-values/test.js**. Edit this script as needed for testing.
	- Write [**mocha**](https://mochajs.org/) tests for the target function available in the `method` object (i.e., `method.formatDuration()`, etc.) using your new test values available in the `tests` object.

			tests.mixedFraction.forEach((item, index) => {
			  it(`Test Passed: Value === ${item.answer}`, () => {
			    assert.equal(method.formatDuration(item.input), item.answer)
			  })
			})

	- Run the tests: `npm test`



### C. Debugging

**Debug** using VS Code.

1. Open `jsalgos/index.js`
2. Call the function to evaluate, for example `format-duration.js`  

		const script = require('./scripts')
		let a = script.formatDuration(120)
		console.log(a)

3. Set breakpoints in `/scripts/format-duration.js` using VS Code.
4. Start debugging: Press **F5**

20191101