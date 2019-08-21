const jwt = require('jsonwebtoken')
require('dotenv').config()

function fetchTokenFromRequest(req) {
  const bearerHeader = req.headers['authorization']

  if (typeof bearerHeader === 'undefined') {
    return false
  }

  const bearer = bearerHeader.split(' ')
  const bearerToken = bearer[1]

  return bearerToken
}

function verifyToken(req, res, next) {
  const token = fetchTokenFromRequest( req )

  if (!token) {
    res.sendStatus(401)
    req.token = null
    return false
  }

  req.token = token

  jwt.verify(req.token, process.env.JWT_SECRET_KEY, (err, authData) => {
    if (err) {
      res.sendStatus(401)
      return false
    } else {
      req.user = authData
      next()
    }
  })
}

module.exports = verifyToken