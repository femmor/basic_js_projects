
class User {
    //  constructor
    constructor(name, email) {
        this.name = name;
        this.email = email
    }

    //  class methods
    login() {
        console.log(this.name, "just logged in")
    }

    logout() {
        console.log(this.name, "just logged out")
    }
}


var userOne = new User("femmy", "femmy@gmail.com");
var userTwo = new User("edwige", "edwige@gmail.com");

userOne.login()
userTwo.logout()