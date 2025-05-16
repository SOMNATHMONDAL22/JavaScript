//Immediately Invoked Function Expression( IIFE ) > IIFE is used when there is pollution in global scope, so to remove the pollution of global scope and varibales , we use IIFE. Syntax is mentioned below.

(function chai(){
    console.log("DB conencted");
})();
                             

(()=>{
    console.log("DB conencted2");
})()