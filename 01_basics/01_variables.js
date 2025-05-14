const accountId = 144553
let accountEmail = "somnath@gmail.com"
var accountPassword= "12345"
accountCity = "Jaipur"
let accountState;

// accountId  = 2 //not allowed . Assignment is constant variable
console.log(accountId);
accountEmail = "smsm@gmail.com"
accountPassword = "123456"
accountCity = "Mumbai"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
//prefer not to use var because of issue in block scope and functional scope.