let mydate = new Date();
console.log(mydate.toLocaleString());
console.log(mydate.toDateString())
console.log(typeof(mydate))

let dob = new Date(1998,11,29) // here the month start from 0 hence here 11 will be dec
console.log(dob)
console.log(dob.toString()+"tostring method")
console.log(dob.toDateString() +"todatestring method")
console.log(dob.toLocaleString()+"tolocalstring method")

let customDate = new Date("1999-02-17")  // YYYY-MM-DD
console.log(customDate.toLocaleString());

let timeStamp = Date.now()

console.log(timeStamp)

let myCustomDate = Date("1998-11-29")

console.log(myCustomDate.toLocaleString())
console.log(myCustomDate.getDay)
console.log(myCustomDate.getMonth)
console.log(myCustomDate.toLocaleString())

console.log(mydate.toLocaleString('default',{weekday:"long",
timeZone:AnimationTimeline,
year:"2-digit"
    
    
})
)
