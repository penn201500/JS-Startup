const set = new Set()
// add(): adds a value to the set
set.add("a")
set.add("b")
set.add(1)
console.log(set) // Set {0: 'a', 1: 'b', 2: 1}
set.add("a")
console.log(set) // Set {0: 'a', 1: 'b', 2: 1}  add duplicate value will be ignored
// has(): checks if a value is in the set
console.log(set.has("a")) // true
console.log(set.has("c")) // false
// delete(): removes a value from the set
set.delete("a")
console.log(set) // Set {0: 'b', 1: 1}
// size: returns the number of values in the set
console.log(set.size) // 2
// keys()
console.log(set.keys()) // {}  console.log() will convert the object in it to a string using toString() method. But set.keys() is an iterator, the iterator object doesn't have a meaningful string representation;
console.log(Array.from(set.keys())) // [ 'b', 1 ]
