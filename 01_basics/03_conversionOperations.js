let score = "99"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score) // here it will be normally convert into int
console.log(typeof valueInNumber) // int

let name = "121Ambuj"

let nameInNumber = Number(name)

console.log(nameInNumber) //her eit will print the "Nan"(not a number) if the value is mixed (string and number) it can be convert but the result will be NaN.

let value1 = null

let convertValue1 = Number(value1)

console.log(convertValue1) // here it will print the 0, if we will try to convert null to int it will give zero(0)


let value2 = undefined

let convertValue2 = Number(value2)

console.log(convertValue2) // here it will also return the NaN value, if we will try to convert undefined to integer we will get NaN




// "33" => 33  --> string to int
// "33abc" => Nan --> string to int
//null => 0 --> null to int
//undefined => Nan --> undefined to int
// true => 1 --> boolean to num/int
//false => 0 --> boolean to num/int
//1 => true --> num/int to Boolean
//0 => false --> num/int to Boolean
//"hitesh" => true --> string to boolean
// "" => false --> empty string to boolean
// "33" => 33 --> string to num


// *************************************OPERATIONS*******************************************************

let value = 5
let negValue = -value
console.log(negValue)


// console.log(2+2);
// console.log(22-12);
// console.log(2*2);
// console.log(2**3); exponential
// console.log(5/2);
// console.log(5%2); reminder

let str1 = "hello"
let str2 = " Ambuj"
let str3 = (str1+str2)
console.log(str3) //it will return hello Ambuj(concatination of string)


console.log("1" + 2) // 12
console.log(1 + 2) //3
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") // 32
console.log(true) // true
console.log(+true) //1


let num1, num2, num3
num1 = num2 = num3 = 2+2

// note, Above code pattern is not a good practice to write code.



// note: If the first operand is string then the conversion will be in string
// note: If the first operand is Number then contiguous number will do aritmatic opration and will concatiante with the followed string

