//declaration of function

function myName(){
    console.log("A")
    console.log("M")
    console.log("B")
    console.log("U")
    console.log("J")
}

myName() // function calling

// function sum(num1, num2) // parameter passing
// {
//     console.log(num1+num2)
// }

// const result = sum(3,4) // argumnets passing while calling

// console.log(result)


function sum(num1, num2) // parameter passing
{
    // console.log(num1+num2)
    return num1+num2
}

const result = sum(3,4) // argumnets passing while calling

console.log(result)


function loginUserMessage(userName)
{
    if(userName) // it is equivalent to username === undefined 
    // if(!userName) is the not of above statemt
    {
        console.log("Please enter a username")
        return
    }
    return `${userName} has not logges in`
}

// const loginfn = loginUserMessage("Hitesh")
// console.log(loginfn)

console.log(loginUserMessage("Hitesh"))

function calculateCartPrice(val1, val2, ...num1) // triple dot is know is REST operator in function which is similar to Spread operator
//REST operator is used to take input variable number of argument.
{
    return num1;
}

console.log(calculateCartPrice(400, 200, 100, 501, 899, 441));


const demoObject = {
    name: "Ambuj kumar Rai",
    company: "Infy",
    salary : 20000
}

function handleObjFn(obj1)
{
    return `Hi\nMy name is ${obj1.name} and I'm associated with ${obj1.company}`
}

console.log(handleObjFn(demoObject))
console.log(handleObjFn({name:"Ambuj", company:"comming soon"}))

const myNewArr = [300,500,700,900]

function arrayFn(getArr)
{
    return getArr[1]
}

console.log(arrayFn(myNewArr))
console.log(arrayFn([200,400,500]))


