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
