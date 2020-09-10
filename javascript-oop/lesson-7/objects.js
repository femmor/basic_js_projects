function User(name, email, online) {
    this.name = name;
    this.email = email;
    this.isOnline = false;
    this.login = function() {
        console.log(this.email, "is logged in")
    }
}

var userOne = new User("femmy", "femmy@gmail.com");
var userTwo = new User("edwige", "edwige@gmail.com");

console.log(userTwo)
userOne.login();
