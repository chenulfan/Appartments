const express = require("express")
const bodyParser = require("body-parser")
const Api = express()


const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:@localhost/appartments')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

// Api.get("/clients", function (req, res) {
//     Clients.find({}).exec(function (err, clients) {
//         // console.log(clients)
//         res.send(clients)
//     })
// })

Api.post("/addUser", async (req, res) => {
    const u = req.body
    let query = `INSERT INTO  user VALUES (null, "${u.password}", "${u.email}", "${u.firstName}", "${u.lastName}", ${u.isApproved} , "${u.firebase_uid}")`
    let result = await sequelize.query(query)
    res.send()
})

Api.post("/addAppartment", async (req, res) => {
    const a = req.body
    console.log(a.owner_id)
    let query = `INSERT INTO appartment VALUES (null, ${a.rooms}, "${a.location}", ${a.price}, "${a.type}", "${a.owner_id}" , "${a.description}" , "${a.date}" )`
    //TODO : update the app table
    let result = await sequelize.query(query)
    console.log(result)
    res.send()
})

Api.get("/appartments" , async (req , res) => {
    let query = `SELECT * FROM appartment`
    let result = await sequelize.query(query)
    console.log(result)
})

// Api.post("/addFav", async (req, res) => {
//     const f = req.body
//     let query = `INSERT INTO  appartment VALUES(null, ${a.rooms}, "${a.location}", ${a.price}, ${a.rent}, ${a.buy})`
//     let result = await sequelize.query(query)
//     console.log(result)
//     res.send()
// })





module.exports = Api






