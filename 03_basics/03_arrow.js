const user = {
    username: "Somnath",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        //this keyword means current context 
    }
}
user.welcomeMessage()
user.username = 'Sam'
user.welcomeMessage()

const chai = ()=>{
    let username = "hitesh";
    console.log(this) //this : only applicable to objects and not functions.
}
chai()

//Arrow functions

// const addTwo = (num1,num2)=> {
// return num1+num2
// }

const addTwo = (num1,num2) => (num1+num2) // Use curly braces only when you are using return keyword , instead use paranthesis () without return.

console.log(addTwo(2,5))