//modulos externos
const chalk = require('chalk')
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
    ]).then((answer)=>{
        const action = answer['action']

        if(action === 'Criar conta'){
            createAccount()
        }
    }).catch((err) => console.log(err))
}

function createAccount(){
    console.log(chalk.bgGreen.black("Parabens por criar a conta!!!"))
    console.log(chalk.green('Defina as opcoes para sua conta'))
}