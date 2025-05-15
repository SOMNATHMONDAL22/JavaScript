// const tinderUser = new Object() //Singleton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "samy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname:{
            firstname: "somnath",
            lastname : "Mondal"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {...obj1,...obj2}
// console.log(obj3)



const Users = [
    {
        id:1,
        email:"h@gmail.com"
    },
      {
        id:1,
        email:"h@gmail.com"
    },

]
Users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course  ={
    coursename: "js in hindi",
    price:"999",
    courseInstructor : "Somnath"
}

// course.courseInstructor
const {courseInstructor:instructor} = course //Destructuring

console.log(instructor)

// {
//     "name":"somnath",
//     "coursename":"js in hindi",
    
// }

[
    {},
    {},
    {}
]

