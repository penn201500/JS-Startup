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
console.log(map.delete("name")) // true
console.log(`Here is the updated map: ${map}`) // Here is the updated map: [object Map]
console.log(map) // Map { 'age' => 25 }
console.log(map.delete("weight")) // false
