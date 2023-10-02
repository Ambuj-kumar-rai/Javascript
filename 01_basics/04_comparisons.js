// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true, in this statement value conversioning is started

// note while comparisoning using greater than and less than sybmbol <, >, <=, >= value conversioning has started and final comparison will start form conversed value
// == is known as equality chek

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

// === check strictly, it will check the value as well as data types

console.log("2" > 0) //false
console.log(2 > 0) // true
