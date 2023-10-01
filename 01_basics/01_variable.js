const accountId = 123456 // (const)constant is used for define constant not variable
let emailId = "abc@xyz.com" // (let) it is used for define veriable and this is new method in js to define variable that support block scope space{}
var accountPassword = "123456" // (var) it is also used for define variable but it is old one and dosen't support block scope space.
name = "Ambuj" // In js we can also assign the value without defining.
let state;

// accountId = 12141516 --> Not allowed because we can't modified the constant value in java

console.log(accountId) // It will print the value of given variable

console.table([accountId, emailId, accountPassword, name, state]) // It will print the value of given variable in the list.

/*
 Note: We have to use const and let for defining the variable, it's a good practice and avoid var.
 */