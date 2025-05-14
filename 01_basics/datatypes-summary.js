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