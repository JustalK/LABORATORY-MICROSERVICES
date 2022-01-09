'use strict'

const { gql } = require('apollo-server-express')

/**
 * The test object
 * @typedef {Object} Test
 * @property {integer} value_integer Simple Integer Test
 * @property {boolean} value_string Simple String Test
 * @property {boolean} value_boolean Simple Boolean Test
 */

module.exports = gql`
  """
  Manage the test collection of the app
  """
  type Test {
    """
    The id
    """
    _id: String!
    """
    A random integer
    """
    value_number: Int!
    """
    A random string
    """
    value_string: String!
    """
    A random boolean
    """
    value_boolean: Boolean!
    """
    A random boolean
    """
    test: Test!
  }
`
