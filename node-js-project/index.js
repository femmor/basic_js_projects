const express = require("express")
const { readFile } = require("fs")

const app = express()

// Get info from server
app.get("/", (req, res) => {
    readFile("./home.html", "utf8", (err, html) => {
        if (err) {
            res.status(500).send("sorry there was an error")
        }
        res.send(html)
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`App is running on port http://localhost:3000`)
})