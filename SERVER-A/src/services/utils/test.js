/**
* The utils function for managing the Test
* @module utils/test
*/
'use strict'

const path = require('path')
const filename = path.basename(__filename, '.js')
const dbs = require('@src/dbs/' + filename)

/**
* Manage the service of Test
**/
module.exports = {
  /**
  * Return all the Test
  **/
  get_tests: async () => {
    return dbs.get_all()
  },
  /**
  * Return all the Test
  **/
  add_test: async (obj) => {
    return dbs.insert(obj)
  },
  /**
  * Get test by id
  **/
  get_test_by_id: async (id) => {
    return dbs.get_by_id(id)
  }
}
