require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./connection/db')
const router = require('./routes/routes')

const server = express()
server.use(cors())
server.use(express.json())
server.use(router)
const PORT =3000 | process.env.PORT

server.listen(3000,()=>{
    console.log(`Ekart Server Running at PORT :${PORT}`);
})

server.get('/',(req,res)=>{
    res.send('<h1>Ekart Server started</h1>')
})