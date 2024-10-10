const express = require("express")
const path = require("path")
const app = express()
const port = 3000

const basePath = path.join(__dirname, 'templates')


app.get('/', (req, res)=>{
    console.log("Vc está sendo requisitado!")
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=> {
    console.log("App rodando")
})