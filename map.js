//set(k,v): adds or updates an entry in the Map
const map = new Map()
map.set("name", "John")
map.set("age", 25)
console.log(map) // Map { 'name' => 'John', 'age' => 25 }

// get(k): returns the value associated with the key k
console.log(map.get("name")) // John
console.log(map.get("height")) // undefined

//has(k): check if the Map contains an entry with the key k
console.log(map.has("name")) // true
console.log(map.has("weight")) // false

// delete(k): removes the entry with the key k from the Map
// delete() will update the Map object
console.log(map.delete("name")) // true
console.log(`Here is the updated map: ${map}`) // Here is the updated map: [object Map]
console.log(map) // Map { 'age' => 25 }
console.log(map.delete("weight")) // false
console.log("Here is the updated map:", map) // ['Here is the updated map:', Map { 'age' => 25 }]
console.log(`Here is the updated map: ${JSON.stringify(Array.from(map.entries()))}`) // Here is the updated map: [["age", 25]]

// keys() : returns an iterator over the keys
console.log(map) // Map { 'age' => 25 }
console.log(Array.from(map.keys())) // [ 'age' ]
console.log(map.keys()) // {}  console.log() will convert the object in it to a string using toString() method. But map.keys() is an iterator, the iterator object doesn't have a meaningful string representation
// values() : returns an iterator over the values
console.log(Array.from(map.values())) // [ 25 ]
// entries(): returns an iterator over the key-value pairs in the Map
console.log(map.entries()) // {}
console.log(Array.from(map.entries())) // [ [ 'age', 25 ] ]

// size
console.log(map.size) // 1

// clear(): removes all entries from the Map
console.log(map) // Map { 'age': 25 }
map.clear()
console.log(map) // Map {}
