// push
let array = [1, 2]
console.log(array.push("A", "B")) // return the length of the array, 4
console.log(`Here is the array: ${array}`)
console.log(`type of array: ${Object.prototype.toString.call(array)}`)

// pop
// pop will remove the last element of the array. And return the removed element.
console.log(array.pop())
console.log(array)

console.log(array.pop()) // this one is 'A'
console.log(array.pop()) // this one is 2
console.log(array.pop()) // this one is 1
console.log(array.pop()) // this one is undefined
console.log(array) // the array is empty now
console.log(array.pop()) // this one is undefined
console.log(array) // the array is still empty

// unshift
let array2 = [1, 2]
console.log(array2.unshift("A", "B")) // return the length of the array, 4
console.log(array2) // ['A', 'B', 1, 2]
console.log(array2.shift()) // 'A'
console.log(array2) // ['B', 1, 2]
console.log(array2.shift()) // 'B'
console.log(array2.shift()) // 1
console.log(array2.shift()) // 2
console.log(array2) // []
console.log(array2.shift()) // shift an empty array will return undefined
console.log(array2) // []

// sort
let array3 = [1, 2, 3, 6, 5]
console.log(array3.sort()) // [1, 2, 3, 5, 6]
console.log(array3) // [1, 2, 3, 5, 6], sort will affect the original array
let array4 = [1, 2, 10, 3, 6, 5]
console.log(array4.sort()) // [1, 10, 2, 3, 5, 6]  sort() converts elements to strings and sort lexicographically by default
console.log(array4.sort((a, b) => a - b)) // [1, 2, 3, 5, 6, 10]  sort() numerical sorting

// splice
let array5 = ["Microsoft", "Apple", "Yahoo", "AOL", "Excite", "Oracle"]
// splice from index 2, delete 3 elements, and add two elements
console.log(array5.splice(2, 3, "Google", "Facebook")) // return elements removed: ['Yahoo', 'AOL', 'Excite']
console.log(array5) // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// delete only, no add:
console.log(array5.splice(2, 2)) // ['Google', 'Facebook']
console.log(array5) // ['Microsoft', 'Apple', 'Oracle']
// only add, no delete:
console.log(array5.splice(2, 0, "Google", "Facebook")) // return []
console.log(array5) // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

// concat
let array6 = ["Microsoft", "Apple", "Yahoo", "AOL", "Excite", "Oracle"]
// concat doesn't change the existing array, but instead create a new array and return it
console.log(array6.concat(1, 2, [3, [4]])) // ["Microsoft", "Apple", "Yahoo", "AOL", "Excite", "Oracle", 1,2,3,[4]]
console.log(array6) // ["Microsoft", "Apple", "Yahoo", "AOL", "Excite", "Oracle"]

// join
let array7 = ["Microsoft", "Apple", "Yahoo", "AOL", "Excite", "Oracle"]
console.log(array7.join("-")) // Microsoft-Apple-Yahoo-AOL-Excite-Oracle

// slice
// slice does not change the existing array, it will create a shallow copy of a portion of the existing array. It returns a new array containing the extracted elements
const fruits = ["apple", "banana", "cherry", "date", "fig"]
const slicedFruits = fruits.slice(1, 3)
console.log(`Here is the sliced array: ${slicedFruits}`) // banana, cherry;
console.log(`Here is the original array: ${fruits}`) // apple, banana, cherry, date, fig;
const lastTwoFruits = fruits.slice(-2)
console.log(`Here is the last two fruits: ${lastTwoFruits}`) // date, fig;
const beyondLastIndex = fruits.slice(2, 10)
console.log(`Here is the beyond last index: ${beyondLastIndex}`) // cherry, date, fig;
const fromIndexToEnd = fruits.slice(2) // from index 2 to the end
console.log(`Here is the from index to end: ${fromIndexToEnd}`) // cherry, date, fig;
const clonedFruits = fruits.slice()
console.log(`Here is the cloned array: ${clonedFruits}`) // apple, banana, cherry, date, fig;

// every
// every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const array8 = [3, 4, 5]
const array9 = [1, 2, 3]

const checkArray8 = array8.every(element => element > 2)
console.log(`Here is the result of array8: ${checkArray8}`) // true
const checkArray9 = array9.every(element => element > 2)
console.log(`Here is the result of array9: ${checkArray9}`) // false

// reverse
const array10 = [1, 2, 3, 4, 5]
console.log(array10.reverse()) // [5, 4, 3, 2, 1]
console.log(array10) // [5, 4, 3, 2, 1]
const array11 = [1, 2, 3, 4, 5]
console.log(array11.slice().reverse()) // return new array: [5, 4, 3, 2, 1]
console.log(array11) // [1, 2, 3, 4, 5]

// destructuring
// unpack values from arrays into separate variables
const array12 = [1, 2, 3]
const [first, second, third] = array12
console.log(first) // 1
console.log(second) // 2
console.log(third) // 3
// skip the second element
const [first2, , third2] = array12
console.log(first2) // 1
console.log(third2) // 3
// only care about the first element
const [first3] = array12
console.log(first3) // 1
// assign the rest of the array to a variable
const [first4, ...rest] = array12
console.log(first4) // 1
console.log(rest) // [2, 3]
// using default value
const [first5, second5, third5 = 5, fourth = 4] = array12
console.log(first5) // 1
console.log(second5) // 2
console.log(third5) // 3 (overwrite the default value)
console.log(fourth) // 4 (default value)

// checking if an element exists in an array
// includes()
const array13 = [1, 2, 3, 4]
console.log(array13.includes(2)) // true
console.log(array13.includes(5)) // false
// indexOf()
console.log(array13.indexOf(2)) // 1
console.log(array13.indexOf(5)) // -1
// find() or findIndex()
const found = array13.find(element => element === 2)
console.log(`Here is the found element: ${found}`) // 2 ; return the value of the first element in the array that satisfies the provided testing function
const foundIndex = array13.findIndex(element => element === 2)
console.log(`Here is the found index: ${foundIndex}`) // 1 ; return the index of the first occurrence of a value in the array

// flat()
const arr14 = [1, 2, [3, 4]]
console.log(arr14.flat()) // [1,2,3,4]
console.log(arr14) // [1,2,[3,4]]
const arr15 = [1, 2, [3, 4, [5, 6]]]
console.log(arr15.flat()) // [1,2,3,4,[5,6]]
// specify depth level
console.log(arr15.flat(2)) // [1,2,3,4,5,6]
// flatten infinitely nested array
const arr16 = [1, 2, [3, 4, [5, 6, [7, 8]]]]
console.log(arr16.flat(Infinity)) // [1,2,3,4,5,6,7,8]
