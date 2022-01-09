/**
* Module for managing the dbs for test
* @module dbs/test
*/
'use strict'

const path = require('path')
const filename = path.basename(__filename, '.js')
const model = require('@src/models/' + filename)

module.exports = {
  /**
  * Call mongodb for getting every document in the collection
  * @return {[Test]} The tests or null
  **/
  get_all: () => {
    return model.find()
  },
  /**
  * Call mongodb for adding an user to the database
  * @param {Test} test The test to add to the database
  * @return {Test} The test added with the id
  **/
  insert: (test) => {
    return model.create(test)
  },
  /**
  * Call mongodb for getting one document by id in the collection
  * @return {Test} The test id or null
  **/
  get_by_id: (_id) => {
    return model.find({ _id })
  }
}
