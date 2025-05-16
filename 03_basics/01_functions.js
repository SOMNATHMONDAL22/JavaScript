function sayMyName(){   //Function  definition > passing parameters
    console.log("S")
    console.log("O")
    console.log("M")
    console.log("N")
    console.log("A")
    console.log("T")
    console.log("H")
}

sayMyName() // Function call > passing arguments

//Addition of two numbers

function addTwoNumbers(number1,number2){
    
 return(number1+number2);
 console.log("Somnath"); // // Will not execute
}

const result = addTwoNumbers(2,4);
console.log(result)
//

function logininUserMessage(username = "Somu"){
    if(!username){
        console.log("Please return username");
        return
    }
    return `${username} just logged in`
}

console.log(logininUserMessage());