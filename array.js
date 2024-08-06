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
