'use strict'

const { gql } = require('apollo-server-express')

module.exports = gql`
  extend type Query  {
    """
    Return the test
    """
    get_tests: [Test]! @isTest
  }
`
