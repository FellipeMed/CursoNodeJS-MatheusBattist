const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})
router.get('/login', (req, res)=>{
    res.sendFile(`${basePath}/login.html`)
})

router.post('/login', (req, res)=>{
    console.log(req.body)

})

router.get('/dashboard', (req, res)=>{
    res.sendFile(`${basePath}/dashboard.html`)
})

module.exports = router