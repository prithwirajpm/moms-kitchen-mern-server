require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Router/router')
require('./DB/connection')


//create express application
const momsServer = express()

momsServer.use(cors())
momsServer.use(express.json())
momsServer.use(router)

const PORT = 4000 || process.env.PORT

momsServer.listen(PORT,()=>{
    console.log(`moms kitchen started at port : ${PORT} and waiting for client requests!!!!`);
})

momsServer.get('/',(req,res)=>{
    res.send(`<h1>moms kitchen Started and waiting for client request!!!!!!</h1>`)
})
