var c = 300; //Global scope ie. outside the block scope

if(true){
    let a= 10  // Block scope
    const b = 20
    var c = 30
    // console.log("Inner a=",a)
}
// let a =400;
// console.log(a)
// // console.log(a)
// // console.log(b)
// console.log(c)

function one(){
    const userName = "Somnath"

    function two(){
        const website = "Youtube"
        // console.log(userName);
    }
        // console.log(website);

        two()
}

one() //In nested function the child function can access the outer parent function but vice-versa is not allowed.

if(true){
    const username = "Somnath"
    if(username === "Somnath"){
        const website1 = "youtube"
    // console.log(username+website1);
    }
    // console.log(website1)
}
// console.log(username)

/**************************************** */


console.log(addone(5)) //Hoisting 

function addone(num){
    return num + 1
}



const addtwo = function(num){
    return num +1
}

console.log(addtwo (5))


