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

// checking if a property exists in an object
// hasOwnProperty()
const obj2 = {
    number: 1,
    height: 2,
    length: 3,
}
console.log(obj2.hasOwnProperty("number")) // true
console.log(obj2.hasOwnProperty("width")) // false
// using 'in' operator
console.log("number" in obj2) // true
console.log("width" in obj2) // false
// using Object.keys()
console.log(Object.keys(obj2).includes("number")) // true
console.log(Object.keys(obj2).includes("width")) // false
// about the 'in' operator: It checks if a property exists either directly on the object or anywhere in its prototype chain.
const animal = {
    eats: true,
}
const obj3 = Object.create(animal)
obj3.run = true
console.log("run" in obj3) // true
console.log("eats" in obj3) // true
console.log(obj3.hasOwnProperty("run")) // true
console.log(obj3.hasOwnProperty("eats")) // false
