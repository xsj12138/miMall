'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
module.exports = {
  NODE_ENV: prodEnv.NODE_ENV
}
