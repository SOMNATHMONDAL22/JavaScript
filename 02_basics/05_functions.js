
function sayMyName (){   
console.log("S");
console.log("O");
console.log("M");
console.log("N");
console.log("A");
console.log("T");
console.log("H");

}

// sayMyName()

function addtwoNumbers(number1,number2){ //parameters as in function definition
    // console.log(number1+number2);
}

const value = addtwoNumbers(4,5)  //arguments as in function calls
console.log(value)


function loginUserMessage(username = "somu"){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Somnath"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){  //rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,500))

const user = {   // Object, can also pass it as a fn call
    username: "Somnath",
    class:10
}

function handleObject(anyObject){ //fn definition and parameters
    console.log(`Username is ${anyObject.username} and class is ${anyObject.class}`)
}

// handleObject(user)
handleObject({    // fn call and arguments
    username:"Somnath",
    class: 12
})

//implementing it with an array.

const myNewArr = [200,300,400,600]

function returnSecondvalue(getArray){
    return getArray[2]
}

console.log(returnSecondvalue(myNewArr))