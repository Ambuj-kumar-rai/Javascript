// Singleton

//Object literals

const mySymbol = Symbol("shift")

const jsUser = {
    name: "Ambuj",
    "lastName": "Rai",
    "full name": "Ambuj Kumar Rai",
    company: "Infy",
    designation: "SSA",
    age: 24,
    isLogedIn: false,
    lastLoginDays: ["Friday","Thursday"],
    [mySymbol]: "normal" // here we are using the symbol variable(symbol data type variable) as key of object
}

console.log(jsUser.name, jsUser.company)
console.log(jsUser.lastName)
console.log(jsUser["name"], jsUser.company)
console.log(jsUser["full name"])
console.log(jsUser[mySymbol]) // this is the way to call the symbol data type key value

// Object.freeze(jsUser); // here we are freezing the Object JsUser, we can't do any modification 

jsUser.age = 18
console.log(jsUser.age)
console.log(jsUser)

jsUser.greetings = function(){
    console.log("Hello welcome to code world")
}

console.log(jsUser.greetings());
console.log(jsUser.greetings); // it will return the type of greeting like: [Function (anonymous)]

jsUser.welcome = function(){
    console.log(`hello mr ${this.name}`)
}

console.log(jsUser.welcome())
