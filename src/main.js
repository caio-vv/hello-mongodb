const express = require("express")
const app = express()
const port = 5000
const pet_router = require("./routers/pet_router")

app.use(express.json())

app.use("/pet", pet_router)

app.listen(port, () => console.log("servidor running"))