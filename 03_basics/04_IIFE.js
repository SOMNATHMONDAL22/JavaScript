//Immediately Invoked Function Expression( IIFE ) > IIFE is used when there is pollution in global scope, so to remove the pollution of global scope and varibales , we use IIFE. Syntax is mentioned below.

(function chai(){
    //named IIFE
    console.log("DB conencted");
})();
                             

((name)=>{
    console.log("DB conencted2");
})('Somnath')

//Javascript execution contexts :

//1> Global execution context : >is always there.
//2> Function execution context
//3> Eval execution context

//A> Memory creation phase
//B> execution phase

