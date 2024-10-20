const express = require("express")
const path = require("path")
const app = express()
const port = 5000
const rotas = require('./rotas')


app.use(express.urlencoded({extended: true}))
app.use(express.json())

const basePath = path.join(__dirname, 'templates')
app.use('/rotas', rotas)
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
app.use(express.static('public'))
app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})


app.listen(port, ()=> {
    console.log("App rodando")
})