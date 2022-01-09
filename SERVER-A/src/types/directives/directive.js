'use strict'

const { gql } = require('apollo-server-express')

module.exports = gql`
  directive @isTest on FIELD_DEFINITION
`
