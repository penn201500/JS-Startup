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
