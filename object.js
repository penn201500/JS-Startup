// destructuring
// unpack properties from objects into separate variables
const obj = {
    name: "Alice",
    age: 25,
    city: "New York",
}

const { name, age, city } = obj
console.log(name) // Alice
console.log(age) // 25
console.log(city) // New York
// renaming variables
const { name: userName, age: userAge } = obj
console.log(userName) // Alice
console.log(userAge) // 25
// default values
const { gender = "female" } = obj
console.log(obj)
console.log(gender) // female
// nested objects destructuring
const person = {
    name2: "Alice",
    addr: {
        city2: "New York",
        state: "NY",
    },
}
const {
    name2,
    addr: { city2, state },
} = person
console.log(name2) // Alice
console.log(city2) // New York
console.log(state) // NY
// rest operator
const { name: name3, ...rest } = obj
console.log(name3) // Alice
console.log(rest) // { age: 25, city: "New York" }
