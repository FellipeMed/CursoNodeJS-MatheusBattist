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
            getAccountBalance()
        } else if( action === 'sacar'){
            withdraw()
        } else if( action === 'Sair'){
            console.log(chalk.bgGreen.bold("Obrigado por usar o Accounts!!!"))
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

        console.log(chalk.bgGreen.bold(`Parabéns, ${accountName}. Sua conta foi criada!`))
        operation()

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

    const accountData = getAccount(accountName)

    if(!amount){
        console.log("Ocorreu um erro, tente novamente mais tarde!")
        return deposito()
    }
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (err) => {console.log(err)})
    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta`))
}

function getAccount(accountName){
 const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, { 
    encoding: 'utf8',
    flag: 'r'
 })   

 return JSON.parse(accountJSON)
}

function getAccountBalance(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then(answer => {
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.bold(`Olá, o salda da sua conta é de R$${accountData.balance}`))
    }).catch(err => console.log(err))
}

function withdraw(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then((answer)=>{
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return withdraw()
        }

        inquirer.prompt([{
            name: 'amount',
            message: 'Quanto deseja sacar?'
        }]).then((answer)=>{
            const amount = answer['amount']
            removeAmount(accountName, amount){

            }
            operation()
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}

function removeAmount(accountName, amount){
    const accountData = getAccount(accountName)

    if(!amount){
        console.log("Aconteceu um erro, tente novamete mais tarde!")
        return withdraw()
    }

    if(accountData.balance < amount){
        console.log("o valor é menor que o que vc tem disponivel!")
        return withdraw()
    }
}