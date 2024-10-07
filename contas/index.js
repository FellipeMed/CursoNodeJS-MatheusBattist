//modulos externos
const inquirer = require('inquirer')
//modulos interno


operation()
function operation(){
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que vc deseja fazer?',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'sacar',
            'Sair']}
    ]).then().catch((err) => console.log(err))
}