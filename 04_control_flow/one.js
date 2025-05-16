// //IF

// if(true){ //will execute

// }
// if(false){ // will not execute
    
// }
// if(2 == "2"){ //will execute
//     // console.log("executed");
// }
// else{
//     // console.log("temp is greater than 50")
// }
// //<,>,<=,>=,==,!=,===,!==

// // const score = 200;

// // if(score>100){
// //     const power = "fly"
// //     console.log(`User power ${power}`)
// // }

// const balance = 1000;
// if(balance>500) console.log("test");

// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance < 750){
//         console.log("less than 750")
// }
// else if(balance < 900){
//         console.log("less than 900")
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromgoogle =false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log('Allow to buy course')
}
if(loggedInFromgoogle || loggedInFromEmail){
    console.log("user logged In")
}


