# JavaScript Starter Methods and Functions

Welcome to the **JavaScript Starter Methods and Functions** repository! This project is designed for beginners who are looking to learn and understand fundamental JavaScript methods, functions, and definitions. The repository contains various examples and explanations of essential JavaScript array methods, string methods, and other utility functions that are frequently used in day-to-day programming.

## Table of Contents

- [JavaScript Starter Methods and Functions](#javascript-starter-methods-and-functions)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Getting Started](#getting-started)
  - [Array Methods](#array-methods)
    - [push](#push)
    - [pop](#pop)
    - [unshift](#unshift)
    - [shift](#shift)
    - [sort](#sort)
    - [splice](#splice)
    - [concat](#concat)
    - [join](#join)
    - [slice](#slice)
  - [String Methods](#string-methods)
    - [charAt](#charat)
    - [concat](#concat-1)
    - [includes](#includes)
    - [indexOf](#indexof)
    - [slice](#slice-1)
    - [split](#split)
  - [Utility Functions](#utility-functions)
    - [parseInt](#parseint)
    - [parseFloat](#parsefloat)
    - [isNaN](#isnan)
    - [isFinite](#isfinite)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

This repository aims to provide a comprehensive collection of JavaScript methods and functions that are essential for beginners. Each method and function is explained with code examples, making it easier for new developers to grasp the concepts and start using them in their projects.

## Getting Started

To get started with this repository, clone it to your local machine:

```bash
git clone https://github.com/penn201500/JS-Startup
```

You can view the source code files and run them in your preferred JavaScript environment.

## Array Methods

### push

The push method adds one or more elements to the end of an array and returns the new length of the array.

```js
let array = [1, 2]
array.push("A", "B")
console.log(array) // Output: [1, 2, 'A', 'B']
```

### pop

The pop method removes the last element from an array and returns that element. This method changes the length of the array.

```js
let array = [1, 2, "A", "B"]
console.log(array.pop()) // Output: 'B'
console.log(array) // Output: [1, 2, 'A']
```

### unshift

The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.

```js
let array = [1, 2]
array.unshift("A", "B")
console.log(array) // Output: ['A', 'B', 1, 2]
```

### shift

The shift method removes the first element from an array and returns that element. This method changes the length of the array.

```js
let array = ["A", "B", 1, 2]
console.log(array.shift()) // Output: 'A'
console.log(array) // Output: ['B', 1, 2]
```

### sort

The sort method sorts the elements of an array in place and returns the sorted array.

```js
let array = [3, 1, 4, 1, 5]
array.sort()
console.log(array) // Output: [1, 1, 3, 4, 5]
```

### splice

The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```js
let array = ["Microsoft", "Apple", "Yahoo", "AOL", "Excite", "Oracle"]
array.splice(2, 3, "Google", "Facebook")
console.log(array) // Output: ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```

### concat

The concat method is used to merge two or more arrays. This method does not change the existing arrays but instead returns a new array.

```js
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = array1.concat(array2)
console.log(array3) // Output: [1, 2, 3, 4, 5, 6]
```

### join

The join method joins all elements of an array into a string and returns this string.

```js
let array = ["Microsoft", "Apple", "Yahoo"]
let str = array.join("-")
console.log(str) // Output: 'Microsoft-Apple-Yahoo'
```

### slice

The slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.

```js
let array = ["apple", "banana", "cherry", "date", "fig"]
let slicedArray = array.slice(1, 3)
console.log(slicedArray) // Output: ['banana', 'cherry']
```

## String Methods

### charAt

The charAt method returns the character at the specified index in a string.

```js
let str = "Hello World"
console.log(str.charAt(1)) // Output: 'e'
```

### concat

The concat method combines the text of two or more strings and returns a new string.

```js
let str1 = "Hello"
let str2 = "World"
let str3 = str1.concat(" ", str2)
console.log(str3) // Output: 'Hello World'
```

### includes

The includes method determines whether one string may be found within another string, returning true or false as appropriate.

```js
let str = "Hello World"
console.log(str.includes("World")) // Output: true
```

### indexOf

The indexOf method returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.

```js
let str = "Hello World"
console.log(str.indexOf("World")) // Output: 6
```

### slice

The slice method extracts a section of a string and returns it as a new string, without modifying the original string.

```js
let str = "Hello World"
let slicedStr = str.slice(1, 5)
console.log(slicedStr) // Output: 'ello'
```

### split

The split method splits a String object into an array of strings by separating the string into substrings.

```js
let str = "Hello World"
let arr = str.split(" ")
console.log(arr) // Output: ['Hello', 'World']
```

## Utility Functions

### parseInt

The parseInt function parses a string argument and returns an integer of the specified radix.

```js
console.log(parseInt("10")) // Output: 10
console.log(parseInt("10.5")) // Output: 10
```

### parseFloat

The parseFloat function parses a string argument and returns a floating point number.

```js
console.log(parseFloat("10.5")) // Output: 10.5
console.log(parseFloat("10")) // Output: 10
```

### isNaN

The isNaN function determines whether a value is NaN (Not-a-Number).

```js
console.log(isNaN("Hello")) // Output: true
console.log(isNaN(123)) // Output: false
```

### isFinite

The isFinite function determines whether a number is a finite, legal number.

```js
console.log(isFinite(123)) // Output: true
console.log(isFinite(Infinity)) // Output: false
```

## Contributing

Feel free to fork this repository and make changes as needed. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
