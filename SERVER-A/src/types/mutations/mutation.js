'use strict'

const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation  {
    add_test(
      "The string value"
      value_string: String,
      "The number value"
      value_number: Int,
      "The boolean value"
      value_boolean: Boolean): Test @isTest
  }
`
