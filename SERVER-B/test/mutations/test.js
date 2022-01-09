'use strict'

require('module-alias/register')
const m_utils = require('@test/libs/utils')

module.exports = {
  add_test: async (value_string, value_number, value_boolean) => {
    return m_utils.getter({
      query: `
        mutation {
          add_test(value_string: "${value_string}", value_number: ${value_number}, value_boolean: ${value_boolean}) {
            value_number
            value_string
            value_boolean
          }
        }`
    })
  }
}
