// push
let array = [1, 2]
array.push("A", "B")
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
