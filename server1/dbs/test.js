/**
* Module for managing the dbs for test
* @module dbs/test
*/
'use strict'

const path = require('path')
const filename = path.basename(__filename, '.js')
const model = require('../models/' + filename)

module.exports = {
  insert: company => {
    return model.create(company)
  }
}
