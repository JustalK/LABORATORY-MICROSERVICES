'use strict'

require('module-alias/register')
const m_utils = require('@test/libs/utils')

module.exports = {
  get_tests: async () => {
    return m_utils.getter({
      query: `
        query {
          get_tests {
            _id
            value_number
            value_string
            value_boolean
          }
        }`
    })
  }
}
