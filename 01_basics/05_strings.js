const firstName = "Ambuj"
const lastName = " Rai"

console.log(firstName+lastName) // this syntax is not agood practice try the below one modern js syntax

console.log(`Hello my first name is ${firstName} and last name is ${lastName}`) //this syntax is known is String interpolation

const fullName = new String("Ambuj Kumar Rai") // here the value will stored in type object and in form of key value pair like in python
console.log(fullName[0]) //A
console.log(fullName) // Ambuj kumar Rai
console.log(fullName.length) // 15
console.log(fullName.toUpperCase())
console.log(fullName.charAt(6)) //A --> intex start form 0(zero)
console.log(fullName.indexOf('R'))

const firstN = fullName.substring(0,6) // this is create a sub string like slicing in python and last index is ecluded.
console.log(firstN)

const newString = fullName.slice(-2, -2) // Ambuj
console.log(newString)


const newString2 = "    hello      "
const resultStr2 = newString2.trim() // here it will remove the extra spaces from starting vale and ending value
console.log(resultStr2)

console.log(fullName.replace('Ambuj', 'Munmun')) // Munmun Kumar Rai
console.log(fullName.includes('Ambuj')) //true --> if the data is present then return true else false

console.log(fullName.split(' ')) //['Ambuj', 'Kumar', 'Rai'] --> it will split the elemnt in form of array as per our given string
