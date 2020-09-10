
class User {
    //  constructor
    constructor(name, email, score) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }

    //  class methods
    login() {
        console.log(this.name, "just logged in")
        return this;
    }

    logout() {
        console.log(this.name, "just logged out")
        return this;
    }

    updateScore() {
        this.score++;
        console.log(this.name, "score is now", this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}



var userOne = new User("femmy", "femmy@gmail.com");
var userTwo = new User("edwige", "edwige@gmail.com");
var admin = new Admin("david", "degomson@gmail.com")

var users = [userOne, userTwo, admin]
console.log(users)

admin.deleteUser(userOne)
console.log(users)