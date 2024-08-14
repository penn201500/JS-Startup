const set = new Set()
// add(): adds a value to the set
set.add("a")
set.add("b")
set.add(1)
console.log(set) // Set {0: 'a', 1: 'b', 2: 1}
set.add("a")
console.log(set) // Set {0: 'a', 1: 'b', 2: 1}  add duplicate value will be ignored
