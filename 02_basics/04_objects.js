const tinderuser = new Object() // here we are creating Object using new method, this is singleton Object

const tinder = {}

tinder.id = "123abc"
tinder.name = "shanky"
tinder.isLoggedIn = false

//console.log(tinder)

const instagram = {
    email: "abc@xyz.com",
    fullName: {
        userFullName: {
            firstName: "Shaudi",
            lastName: "Chauhan"
        }
    }
}

console.log(instagram.fullName.userFullName.firstName)
console.log(instagram.fullName?.userFullName.lastName)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...instagram, ...obj2}

console.log(obj3)

const userList = [
    {id: "2324abc",
    name: "Ambuj"
    },

    {
        firstName: "hello",
        lastName: "world"
    }
]

console.log(userList[0].name)

console.log(tinder)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(tinder.hasOwnProperty('isLoggedIn')) // .hasOwnProperty will give the result in boolean if that property is available


const course = {
    courseName: "Js in hindi",
    price: 99,
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor} = course;
console.log(courseInstructor)


const {courseInstructor: instructor} = course;
console.log(instructor)


// {
//     "name": "Ambuj",
//     "teachBy": "self",
//     "price": "free"
// }
// above statement is json format statement

[

    {},
    {}
]