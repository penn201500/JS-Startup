// loop through Object
//
const obj = {
    name: "Alice",
    age: 25,
    city: "New York",
}
// use for..in loop
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`)
    }
}
// use Object.keys() and forEach()
Object.keys(obj).forEach(key => {
    console.log(`${key}: ${obj[key]}`)
})
// use Object.entries() and forEach()
Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})
// use for..of with Object.entries()
for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)
}

// loop through array
const arr = ["Alice", 25, "New York"]
// use for loop
for (let i = 0; i < arr.length; i++) {
    console.log(`${i}: ${arr[i]}`)
}
// use for..of and entries()
for (let [index, value] of arr.entries()) {
    console.log(`${index}: ${value}`)
}
// use map() method
arr.map((value, index) => console.log(`${index}: ${value}`))
// use filter() method
arr.filter((value, index) => {
    if (typeof value === "string") {
        console.log(`${index}: ${value}`)
    }
})
// use reduce() method
const acc = arr.reduce((acc, value, index) => {
    console.log(`${index}: ${value}`)
    return acc
}, 0)
console.log(acc)
