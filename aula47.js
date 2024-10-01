//lendo html via fs

const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
    fs.readFile('aula47.html', (err, data) => {
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write(data)
        return res.end()
    })

})

server.listen(port, () => {
    console.log('Servido rodando ....')
})