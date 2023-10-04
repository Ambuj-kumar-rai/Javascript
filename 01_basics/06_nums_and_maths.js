const score = 99;
const newScore = new Number(101);

console.log(score)
console.log(newScore)

console.log(newScore.toString().length);
console.log(newScore.toFixed(2)); // given upto 2 decimal value 

const preciseScore = 121.597

console.log(preciseScore.toPrecision(3)); // it will provide the round number of given length value from left side.

const hundred = 100000
console.log(hundred.toLocaleString()); // 1,000,000 --. standard use number system 
console.log(hundred.toLocaleString('en-IN')); // 10,00,000 --. indian standard



//++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-189)) // 189 given abs value(+ve value)
console.log(Math.ceil(4.9)) // 5
console.log(Math.floor(4.9)) //4
console.log(Math.max(1,5,8,2,4,)) //8

console.log(Math.random()) // it will provide random value from 0 to 1(both inclusive)