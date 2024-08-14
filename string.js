// charAt
const str3 = "Hello World"
console.log(str3.charAt(0)) // H

// concat

// split
const str = "Hello World One Two Three"
console.log(str.split(" ")) // ["Hello", "World", "One", "Two", "Three"]
console.log(str.split("")) // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", " ", "O", "n", "e", " ", "T", "w", "o", " ", "T", "h", "r", "e", "e"]
console.log(str.split(" ", 2)) // ["Hello", "World"]
console.log(str.split()) // ["Hello World One Two Three"]
const str2 = " Hello World "
console.log(str2.split(" ")) // ["", "Hello", "World", ""]
