//escrevendo em arquivos por formulario html

const http = require('http')
const fs = require('fs')


const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name123

    if(!name){

        fs.readFile('aula48.html', (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else{
        fs.writeFileSync("aula48.txt", name, (err, data)=> {
            res.writeHead(302, {location: '/'})
            return res.end()
        })
    }
        
})

server.listen(port, () => {
    console.log('Servido rodando ....')
})