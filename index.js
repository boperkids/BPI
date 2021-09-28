//load config

// rename this file into 'index.js'

var env = process.env.NODE_ENV || 'development'
var config = require('./config')[env]

module.exports = config