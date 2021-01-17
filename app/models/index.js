const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose

db.role = require('./role.model.js')
db.user = require('./user.model.js')
db.tutorials = require('./tutorial.model.js')

db.ROLES = ["user", "admin", "moderator"]

module.exports = db
