// #Primitive data types: 7 types
// String,number, boolean, null,undefined, symbol,bigInt

//javascript is dynamically typed lamguage

const score = 100;
const scorevalue = 100.3
const isLoggedIn = true
const outsideTemp = null
let   userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id,anotherid)
console.log(id === anotherid)

const bigNumber = 2366936498n


//#non-primitive or reference types 
//Arrays, Objects, Functions

const heros = ['shaktiman','tom','jerry']
let myObj= {
    name:"somnath",
    age:22,
}

console.log(myObj);

const myFunc = function(){
    console.log("hello world")
}
//************************* */

//Stack memory(primitive), Heap(Non-primitive)

let myYoutubeName = "SomnathYoutubeChannel"

let anothername = myYoutubeName

anothername = "superman"
console.log(anothername)
console.log(myYoutubeName)

let userOne ={
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne 
userTwo.email = "xyz@google.com"
console.log(userOne.email)
console.log(userTwo.email)


