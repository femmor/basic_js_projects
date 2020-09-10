
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email
    }
}

let users = [];

var userOne = new User("femmy", "femmy@gmail.com");
var userTwo = new User("edwige", "edwige@gmail.com");

users.push(userOne, userTwo);
console.log(users)