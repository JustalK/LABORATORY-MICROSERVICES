/**
* The resolver for managing the test resolver
* @module resolvers/user
*/
'use strict'

const utils_test = require('@src/services/utils/test')

module.exports = {
  /**
  * Process the test node
  * @param {Object} parent The object describing what field we try to extract from the node
  * @return {Object} The test with the information wanted
  **/
  test: parent => {
    return parent.test ? utils_test.get_test_by_id(parent.user_type) : null
  }
}
