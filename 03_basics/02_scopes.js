if(true) // content inside bracket is known is block scope
{
    let a = 25;
    let c = "const";
    const d = 30
    console.log(`innser loop value: ${a}`)
}

// console.log(a)


// content outside bracket is known as global scope
let a = 35;
let c = "global scope value";
const d = 56;

console.log(a)


function one()
{
    const username = "Ambuj Kumar Rai"

    function two()
    {
        const website = "Youtube"
        console.log(username)
    }

    // console.log(website)
    console.log(username)
    // two();
}

one();


function addOne(num)
{
    return num+1;
}

const AddTwo = function(num1)
{
    return num1 +1;
}

console.log(addOne(5))
console.log(addOne(6))