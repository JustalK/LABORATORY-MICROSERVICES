/**
* The queries for the Test
* @module queries/test
*/
'use strict'

const utils_test = require('@src/services/utils/test')
/**
* Manage the queries for the question model
**/
module.exports = {
  /**
  * Query for getting all the Test
  * @param {[Test]} Return the list of all the tests
  **/
  get_tests: async (_, args) => {
    return utils_test.get_tests()
  }
}
