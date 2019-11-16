const express = require("express")
const app = express()

const index = require("./routes/index")
const tarefas = require("./routes/tarefasRoutes")
app.use(function (req, res, next){
    res.header("Acess-Controll-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"

    )
    next()
});
app.use("/", index)
app.use("/tarefas", tarefas)

module.exports = app





