require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const router = require('./routes/router')

const shopServer = express()
shopServer.use(cors())
shopServer.use(express.json())
shopServer.use(router)

const PORT = 3000||process.env.PORT
shopServer.listen(PORT,()=>{
    console.log(`ShopZest Server started at port ${PORT} and waiting for client request`);
})

shopServer.get('/',(req,res)=>{
res.send(`<h1 class='text-danger'>ShopZest Server started and waiting for client request!!</h1>`)
})