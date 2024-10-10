const express = require("express")
const path = require("path")
const app = express()
const port = 3000

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) =>{
    const id = req.params.id
    console.log(`Buscando usuario com o id ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res)=>{
    console.log("Vc está sendo requisitado!")
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=> {
    console.log("App rodando")
})