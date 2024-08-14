// charAt
const str3 = "Hello World"
console.log(str3.charAt(0)) // H

// length
console.log(str3.length) // 11

// toUpperCase
console.log(str3.toUpperCase()) // HELLO WORLD
// toLowerCase
console.log(str3.toLowerCase()) // hello world
// substring
console.log(str3.substring(0, 5)) // Hello
// slice
console.log(str3.slice(0, 5)) // Hello
console.log(str3)
// indexOf
console.log(str3.indexOf("o")) // 4
// includes
console.log(str3.includes("o")) // true
// replace
console.log(str3.replace("World", "Alice")) // Hello Alice
// trim : remove whitespace from both ends of the string
console.log(str3.trim()) // Hello World
// concat
const str4 = "hello"
const str5 = "world"
console.log(str4.concat(" ", str5, "!")) // hello world!

// split
const str = "Hello World One Two Three"
console.log(str.split(" ")) // ["Hello", "World", "One", "Two", "Three"]
console.log(str.split("")) // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", " ", "O", "n", "e", " ", "T", "w", "o", " ", "T", "h", "r", "e", "e"]
console.log(str.split(" ", 2)) // ["Hello", "World"]
console.log(str.split()) // ["Hello World One Two Three"]
const str2 = " Hello World "
console.log(str2.split(" ")) // ["", "Hello", "World", ""]
