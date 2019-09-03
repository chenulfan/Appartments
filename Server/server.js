const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()


const cors = require('cors')


const Api = require( "./Api")

app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
app.use('/', Api)
app.use(cors())

const server = app.listen(5000, () => console.log('Server started on port 5000'))

const socket = require("socket.io") 

app.use(express.static("public"))

const io = socket(server)
io.on("connection", (socket) =>{
    console.log("user connected")
    
    socket.on('chat', function(data){
        io.sockets.emit('chat', data)
        console.log("done")
    })
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
        console.log("doing typing")
    })
})
