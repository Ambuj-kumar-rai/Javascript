const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["sperman", "flash", "batman"]

//marvel_heros.push(dc_heros) // it will add the dc_heros all element at last position as seperate array
console.log(marvel_heros)

const allHero = marvel_heros.concat(dc_heros) // it will concat the all value of given array an return a new array.
console.log(allHero)

const spreadArray = [...marvel_heros, ...dc_heros] // it will apread all the element of all given array and rerturn a new array.
console.log(spreadArray)

const anotherArr = [1,2,3,[3,5,6,[7,8,9],8,78],76,54] 

const realAnotherArray = anotherArr.flat(Infinity) // it will return a single array and all values are spreaded out. 
console.log(realAnotherArray)


console.log(Array.isArray("Ambuj")) // it will check given data is in Array format and return true/flase
console.log(Array.from("Ambuj")) // it will convert into Array of given string.
console.log(Array.from({name: "Ambuj", company: "Infy"})) // return empty array if we will not clarify for which thing we need to create array (keys/value)
console.log(Array.from({name: "Ambuj", company: "Infy"}))

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))


