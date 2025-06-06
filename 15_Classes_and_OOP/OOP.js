// const user = {
//   username: "Somnath",
//   logInCount: 8,
//   signedIn: true,
//   getUserDetails: function () {
//     // console.log("Got user details from database");
//     // console.log(this.username);
//     // console.log(`username: ${this.username}`);
//     console.log(this);
//   },
// };

// console.log(this.username);
// console.log(this);
// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); //Global context

// const promiseOne = new Promise(); //new keyword is a constructor function
// const date = new Date();
// This new keyword is a constructor function

function User(username, logInCount, isLoggedIn) {
  this.username = username; //Left hand side one is the variable and right hand side is the passed value.
  this.logInCount = logInCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  // return this;
}

const userOne = new User("Somnath", 12, true);
const userTwo = new User("Javascript", 11, false);
// console.log(userOne);
console.log(userOne.constructor);

//Constructor function gives a new instance everytime.

/*Whenever "new" keyword is written, an empty object is created which is called instance.

Step1 : New object is created

Step2: A constructor function is called due to this new keyword.It packs all the arguments and gives it to you.

Step 3: All the arguments are injected in this new keyword.

Step 4 : We all get this in the 4th step.

Study instance of javascript.
*/
