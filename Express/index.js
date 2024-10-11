const express = require("express")
const path = require("path")
const app = express()
const port = 3000

const basePath = path.join(__dirname, 'templates')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/users/create', (req, res)=>{
    res.sendFile(`${basePath}/form.html`)
})

app.get('/users/save', (req, res) =>{
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`Seu nome é ${name} e sua idade é ${age}`)
})

app.get('/', (req, res)=>{
    console.log("Vc está sendo requisitado!")
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=> {
    console.log("App rodando")
})