class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    // return this._password.toUpperCase();
    return `this${this._password}somnath`;
  }

  set password(value) {
    this._password = value;
  }
}
const somnath = new user("som@email", "123");
console.log(somnath.password);
