//  Node JS examples

// Methods

// global same as the window object in the browser
// global.luckyNum = 70;
// console.log(global.luckyNum);



// process
// console.log(process.platform);
// console.log(process.env.USER);



// Events
// process.on("exit", () => {
//     // Run this function on exit
// });

// const { EventEmitter } = require("events");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("lunch", () => {
//     console.log("Eating lunch Yummy...!");
// });

// eventEmitter.emit("lunch");
// eventEmitter.emit("lunch");
// eventEmitter.emit("lunch");



// File System
// const { readFile, readFileSync } = require("fs");

// Using promises - async and non blocking + cleaner code compared to callback
// const { readFile } = require("fs").promises;
// async function hello() {
//     const file = await readFile("./hello.txt", "utf-8")
//     console.log(file)
// }
// hello()
// console.log("Promises are good when kept")

// Blocking using readFile
// const txt = readFileSync("./hello.txt", "utf-8");
// console.log(txt);
// console.log("DO this ASAP")

// Make it non-blocking by using a callback function
// readFile("./hello.txt", "utf-8", (err, txt) => {
//     try {
//         console.log(txt)
//     } catch (error) {
//         console.log(err)
//     }
// });

// console.log("DO this ASAP")


// Modules and NPM
// const myModule = require("./my_module")

// console.log(myModule);