'use strict'

const { gql } = require('apollo-server-express')

module.exports = gql`
  """
  Queries of the app
  """
  type Query  {
    """
    Test the status of the API
    """
    _: Boolean
  }
`
