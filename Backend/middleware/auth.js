const Tokens = require('../models/Tokens')

module.exports = (req, res, next) => {
  const token = req.query.token
  const isExist = Tokens.isExist(token)
  if (!isExist) {
    res.status(401).json({msg: 'Unauthorized.'})
    return
  }
  next()
}