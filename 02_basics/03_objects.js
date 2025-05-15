//singleton
//Object literals
const mySym = Symbol("key1")
const JsUser ={
    name:"Somnath",
    [mySym] :"mykey1",
    age : 25,
    email:"som@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser[mySym])

// JsUser.email = "somu@google.com"
// Object.freeze(JsUser)
// JsUser.email = "somu@tesla.com"
// Object.freeze(JsUser)
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,my name is ${this.name}`)
}
JsUser.greetingThree = function(){
    console.log(`JS user's email ID is ${this.email}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
console.log(JsUser.greetingThree())
