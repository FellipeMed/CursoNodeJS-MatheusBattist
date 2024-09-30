//Modulo HTTP com Url

const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name1 = urlInfo.query.name
    
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    
    if(!name1){
        res.end('<form method="GET"><input type="text" name="Felipe" /><input type="submit" value="Send"></form>')
    } else{
        res.end(`<h1> Seja bem vindo ${name1}</h1>`)
    }

})

server.listen(port, () => {
    console.log('Servido rodando ....')
})