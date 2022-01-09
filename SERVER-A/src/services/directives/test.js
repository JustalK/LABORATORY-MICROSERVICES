/**
* The directives of the test
* @module directives/test
*/
'use strict'

const { ForbiddenError, SchemaDirectiveVisitor } = require('apollo-server-express')

/**
* Useless Test Directive
**/
class isTest extends SchemaDirectiveVisitor {
  visitFieldDefinition (field) {
    const { resolve } = field
    field.resolve = async function (...args) {
      // Can do anything here
      const result = await resolve.apply(this, args)
      return result
    }
  }
}

module.exports = { isTest }
