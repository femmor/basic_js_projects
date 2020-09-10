
var userOne = {
    email: "femmy@gmail.com",
    name: "femmy",
    login(){
        console.log(this.email+" is logged in")
    },
    logout(){
        console.log(this.name+" is logged out")
    }
}

userOne.name = "Emmanuel"
console.log(userOne.name)