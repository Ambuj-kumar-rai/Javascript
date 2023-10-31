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