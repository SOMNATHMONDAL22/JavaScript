class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId());

class teacher extends User {
  constructor(username, User) {
    super(username);
    this.email = this.email;
  }
}

const iphone = new teacher("samsung", "samsung.com");
console.log(iphone.logMe());
