/**
* The mutation for test
* @module mutations/test
*/
'use strict'

const utils_test = require('@src/services/utils/test')

module.exports = {
  add_test: async (_, args) => {
    return utils_test.add_test(args)
  }
}
