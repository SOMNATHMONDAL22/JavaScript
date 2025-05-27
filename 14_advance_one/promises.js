// const promiseOne = new Promise(function(resolve,reject){
//     //we pass function in promise
//     // Do an asyc task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is complete");
//             resolve()

// const { use } = require("react");

//     },1000)
// })
// //.then has direct connection with resolve
// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

//********************* */
//When we dont use variable to store the promise.

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolve")
// })

//********************** */
//Promsie 3

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"chai@Example.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })
//*************************** */

//Promise 4

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Somnath",password:"123"})
        }else{
            reject("ERROR : Something went wrong")
        }
    },1000)
})
//We can use as many .then and .catch as we want
PromiseFour
.then((user)=>{
    console.log(user)
    return user.username;
}).then((username)=>{   //The return value of the upper .then is returned here
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})

//***********************88 */
//Promise 5

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject("ERROR : JS went wrong")
        }
    },1000)
})

async function consumePromiseFive() {
  try {
    const response = await PromiseFive // Dont use paranthesis as promise is an object
    console.log(response)
  } catch (error) { 
    console.log(error)
  }
}

consumePromiseFive()

// async function getAllUsers() {
//       try {
//           const resposne = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await resposne.json()
//         console.log(data)

//       } catch (error) {
//           console.log("E:",error)

//       }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((resposne)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
