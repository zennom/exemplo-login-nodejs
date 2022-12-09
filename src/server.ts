import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'

dotenv.config()

const server = express()

server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended:true}))

server.listen(process.env.PORT)

server.use((req,res) =>{
    res.send("Página não encontrada")
})