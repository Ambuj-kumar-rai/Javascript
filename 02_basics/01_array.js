const myArr = [0,1,3,5,"abc", 4.5, true] //Array in js is heterogenius
const myHeros = new Array(1,2,3,4,5) // we can declare using this syntaxc also
console.log(myArr[1])
console.log(myHeros[3])

// Array methods

myArr.push(6) // inster the given element in Array
console.log(myArr)
myArr.pop() //It will remove the last element
console.log(myArr);

// myArr.unshift(9); // it will insert the value at first position or at zero index
// console.log(myArr)
myArr.shift(); // it will remove the first element
console.log(myArr)

console.log(myArr.includes(8)); // it will return true if follow the condition else false
console.log(myArr.indexOf(5)) // if exist return true else return -1


const arrString = myHeros.join(); // it will return the all arrays element in string format comma seperated
console.log(arrString)

// slice , splice

//The slice() method can be used to create a copy of an array or return a portion of an array. It is important to 
//note that the slice() method does not alter the original array but instead creates a shallow copy.

const mysliceArr = myHeros.slice(1,3) // here 1 and 3 is range and 3 is ecluded
console.log(mysliceArr)


//The splice() method is used to add or remove elements of an existing array and the return value will 
//be the removed items from the array.

const myspliceArr = myHeros.splice(1,3) // it will print from index 1 to 3 included as well as it will delete the selected range element from original array.
console.log(myspliceArr)
console.log(myHeros)

