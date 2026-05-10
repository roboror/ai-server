const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/chat", (req, res) => {
    const message = req.body.message

    res.json({
        reply: "You said: " + message
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started")
})
