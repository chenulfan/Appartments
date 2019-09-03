const express = require("express")
const bodyParser = require("body-parser")
const Api = express()

const nodemailer = require('nodemailer')
const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:@localhost/appartments')
const cloudinary = require('./Cloudinary')
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })


Api.post("/addUser", async (req, res) => {
    const u = req.body
    let query = `INSERT INTO  user VALUES (null, "${u.password}", "${u.email}", "${u.firstName}", "${u.lastName}", ${u.isApproved} , "${u.firebase_uid}", "${u.phone}")`
    let result = await sequelize.query(query)
    res.send()
})

Api.post("/addAppartment", async (req, res) => {
    const a = req.body
    console.log(a.url)
    let query = `INSERT INTO appartment VALUES (null, ${a.rooms}, "${a.location}", ${a.price}, "${a.type}", "${a.owner_id}" , "${a.description}" , "${a.date}", "${a.url}" )`
    //TODO : update the app table
    let result = await sequelize.query(query)
    console.log(result)
    res.send(result)
})

Api.get("/appartments", async (req, res) => {
    let query = `SELECT * FROM appartment`
    let result = await sequelize.query(query)
    res.send(result[0])
})
Api.get("/contact/:uid", async (req, res) => {
    console.log(req.params)
    let query = `SELECT * FROM user WHERE firebase_uid="${req.params.uid}"`
    let result = await sequelize.query(query)
    res.send(result[0])
})

Api.post('/sendEmail', (req, res) => {
    console.log("got To server")
    const helperOptions = req.body
    let transport = {
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: 'phantomsub0@Gmail.com',
            pass: '!@#$%%$#@!',
        },
        tls: { rejectUnauthorized: false }
    }
    let transporter = nodemailer.createTransport(transport);
    transporter.sendMail(helperOptions, (err, info) => {
        if (err) { return console.log(err) }
        else { return console.log(info) }
    })
    res.send("Email Sent")
})
Api.post("/addFav", async (req, res) => {
    const f = req.body
    let query = `INSERT INTO  fav_user_app VALUES( ${f.id_u}, ${f.id_app})`
    let result = await sequelize.query(query)
    console.log(result)
    res.send(result)
})

Api.get("/Fav/:id", async (req, res) => {
    let id = await sequelize.query(`SELECT id FROM user WHERE firebase_uid="${req.params.id}"`).then( r=>{
         return r[0][0].id
    })

    let result = await sequelize.query(`SELECT id_app FROM fav_user_app WHERE id_u=${id}`)

    let trainers = result[0].map(async r => {
        const result = await sequelize.query(`SELECT * FROM appartment WHERE id=${r.id_app}`)
        return result[0][0]
    })
    trainers = await Promise.all(trainers)
    res.send(trainers)
})

Api.get("/removeFav/:id", async (req, res) => {
    let query = `DELETE FROM appartment WHERE id=${req.params.id}`
    let result = await sequelize.query(query)
    res.send("done")
})

Api.post('/addImg', (req, res) => {

    const x = req.body
    console.log(x)
    
    cloudinary(req.body).then(c => {
        console.log(c)
        return c
    })
    res.end()
})




module.exports = Api






