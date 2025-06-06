// let myName = "Somnath      ";
// let myChannel = "chai    ";

// console.log(myName.trueLength);

let myheros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidey power is ${this.spiderman}`);
  },
};

Object.prototype.somnath = function () {
  console.log("Somnath is present in all objects");
};
// heroPower.somnath();
// myheros.somnath();

//Inheritance

const user = {
  name: "Somnath",
  email: "somu@gmail.com",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignemnt",
  fulltime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = user;

let anotherUsername = "chaiaurCode   ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length} `);
};

anotherUsername.trueLength();
"somnath".trueLength();
"icetea".trueLength();
