//  Basically in js datatypes are divided in two categories: Primitive datatypes and Non primitive datatypes.

// 7 types in primitive: (primitive datatpye is call by value not reference, we directly provided the data not address of memory location)

// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

let userName = "Ambuj"
let roll = 99
let isAbsent = false
let nikName = null
let lastName
let symbolvariable = Symbol("22")
let symbolvar = Symbol("22")

console.log(symbolvar == symbolvariable) // return false beacuse symbol is used for unique id

let pid = 657656745354564534n


// Non Primitive / Refrence typed data types

// Array
// Object
// Function

const myArr = ["AMbuj", "Sam", "Subh", "Tabish"]
let myObj = {
    firstName: "Ambuj", age: 24, emp: "infy"
}

const myFn = function()
{
    console.log("Hey This is in Function");
}
