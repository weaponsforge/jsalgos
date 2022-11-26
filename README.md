# jsalgos

> A collection of solutions to classic problems using javascript.
> A boilterplate for basic javascript nodejs environment and methods testing with [**mocha**](https://mochajs.org/).


### Dependecies

1. NodeJS
	- version 10.16.3 was used for this project
2. Windows 10 OS 64-bit
3. VS Code
	- for debugging (breakpoints)

### Content

1. [Scripts](https://github.com/weaponsforge/jsalgos#scripts)
	- [main scripts](https://github.com/weaponsforge/jsalgos#scripts-1) - **/scripts**
	- [utility scripts](https://github.com/weaponsforge/jsalgos#scriptsutils) - **/scripts/utils**
2. [Installation](https://github.com/weaponsforge/jsalgos#installation)
3. [Usage](https://github.com/weaponsforge/jsalgos#usage)
	- [Create New Scripts](https://github.com/weaponsforge/jsalgos#a-create-new-scripts)
	- [Testing](https://github.com/weaponsforge/jsalgos#b-testing)
	- [Debugging](https://github.com/weaponsforge/jsalgos#c-debugging)



## Scripts

### /scripts

Main methods and functions are saved inside the **/scripts** directory. These are proposed solutions for [codewars](https://www.codewars.com/) problems.

#### Usage:

	const methods = require('./scripts')
	methods.formatDuration(362)
	methods.mixedFraction('97/25')
	methods.parseInt('one hundred and five')
	...

1. **format-duration.js** - [[link]](https://www.codewars.com/kata/52742f58faf5485cae000b9a)<br>
Accepts time input in seconds and returns a human-readable conversion format.

2. **mixed-fraction.js** - [[link]](https://www.codewars.com/kata/556b85b433fb5e899200003f)<br>
Converts a fraction to its lowest terms mixed fraction form.

3. **parse-string-int.js** - [[link]](https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5)<br>
Converts an English string of a number to its numerical value.

4. **sum-by-factors.js** - [[link]](https://www.codewars.com/kata/54d496788776e49e6b00052f)<br>
Generate a list of all prime factors from array elements matched with the sum of array element(s) to which it is a prime factor of.

5. **smallest.js** - [[link]](https://www.codewars.com/kata/find-the-smallest/javascript)<br>
Get the smallest combination from the input number while moving only (1) digit.

6. **top-three-words.js** - [[link]](https://www.codewars.com/kata/51e056fe544cf36c410000fb)<br>
Retrieves the top (3) most used words from a sentence.

7. **dependency-injection.js** - [[link]](https://www.codewars.com/kata/dependency-injection/train/javascript)<br>
Testing for [dependency injection](https://medium.com/@maciekprzybylski/dependency-injection-in-javascript-74f8791ba7c8) where the kata's idea is to be able to execute the functions passed as arguments in any specified order.

6. **array-rotate.js** - [[link]](https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/)<br>
Rotate array A K times; that is, each element of A will be shifted to the right K times.

7. **binary-gap.js** - [[link]](https://app.codility.com/programmers/lessons/1-iterations/binary_gap/)<br>
Find the largest binary gap - longest streak of consecutive zeroes between 1's in the binary conversion of a Number

8. **odd-occurrences.js** - [[link]](https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/)
   > A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
   - Goal is to write a function that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

9. **mergesort.js**<br>
Classic javascript implementation of the merge sort method

### /scripts/utils

Contains various reusable utility scripts. Methods and functions are saved inside the **/scripts/utils** directory.

#### Usage:


	const { factors, Binary, findRepeating } = require('./scripts/utils')
	factors(25)
	Binary.toNumber('101')
	findRepeating(145614561852)
	...


1. **factors.js**<br>
Returns an array of a number's factors not including itself.

2. **binary.js**
`toNumber`: Converts a str<br>ing of binary sequence into its number format.
`toBinary`: Converts a Number into Binary format

3. **findRepeating.js** (WIP)<br>
Finds the repeating sequence of a number in `String` format.


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

1. To run current tests:<br>
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