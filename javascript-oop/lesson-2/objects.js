
var userOne = {
    email: "femmy@gmail.com",
    username: "femmy",
    login(){
        console.log(this.email+" is logged in")
    },
    logout(){
        console.log(this.username+" is logged out")
    }
}

console.log(userOne.logout());