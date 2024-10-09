//modulos externos
const chalk = require('chalk')
const fs = require('fs')
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
        } else if( action === 'Depositar'){
            deposito()
        } else if( action === 'Consultar saldo'){

        } else if( action === 'sacar'){

        } else if( action === 'Sair'){

        }
    }).catch((err) => console.log(err))
}

function createAccount(){
    console.log(chalk.bgGreen.black("Parabens por criar a conta!!!"))
    console.log(chalk.green('Defina as opcoes para sua conta'))

    buildAccount()
}

function buildAccount(){
    inquirer.prompt([{
        name: 'accountName',
        message: ' Digite o nome para sua conta:'
    }]).then(answer => {
        const accountName = answer['accountName']

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black("Essa conta ja existe"))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', (err) =>{ console.log(err) })

        console.log(chalk.bgGreen.bold("Parabéns, sua conta foi criada!"))

    }).catch((err)=>{console.log(err)})
}

function deposito(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer)=>{
        const accountName = answer['accountName']
        
        if(!checkAccount(accountName)){
            return deposito()
        }

        inquirer.prompt([{
            name: 'amount',
            message: 'Quanto vc deseja depositar?'
        }]).then((answer) => {
            const amount = answer['amount']

            addAmount(accountName, amount)
            operation()
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}

function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed('Esta conta não existe'))
        return false
    }

    return true
}

function addAmount(accountName, amount){

    const account = getAccount(accountName)
    console.log(account)


}

function getAccount(accountName){
 const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, { 
    encoding: 'utf8',
    flag: 'r'
 })   

 return JSON.parse(accountJSON)
}