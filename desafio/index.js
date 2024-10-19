const express = require("express")
const path = require("path")
const app = express()
const port = 5000

const basePath = path.join(__dirname, 'templates')

const checkAuth = (req, res, next) =>{
    req.authStatus = true

    if(req.authStatus){
        console.log("esta logado")
        next()
    }else{
        console.log("nao esta logado")
        next()
    }
}

app.use(checkAuth)

app.get('/', (req, res)=>{
    console.log("Vc está sendo requisitado!")
    res.sendFile(`${basePath}/index.html`)
})

app.get('/login', (req, res)=>{
    console.log("Vc está sendo requisitado!")
    res.sendFile(`${basePath}/login.html`)
})

app.get('/dashboard', (req, res)=>{
    console.log("Vc está sendo requisitado!")
    res.sendFile(`${basePath}/dashboard.html`)
})

app.listen(port, ()=> {
    console.log("App rodando")
})