//removendo arquivo com fs
const fs = require('fs')

    fs.unlink('aula48.txt', (err) => {
        if(err){
            console.log("Arquivo nao encontrado")
        }
        console.log("Arquivo removido com sucesso!")
    } )