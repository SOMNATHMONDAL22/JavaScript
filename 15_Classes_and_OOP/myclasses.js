//ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@jkk.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUserName());

//Behind the scene

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User1.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User1.prototype.changeUserName = function () {
  return `${this.changeUserName}abc`;
};

const tea = new User1("tea", "tea@jkk.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUserName());
