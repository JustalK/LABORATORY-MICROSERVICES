/**
* The models of the test
* @module models/test
*/
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

const schema = new mongoose.Schema({
  value_string: {
    type: String,
    required: true
  },
  value_number: {
    type: Number,
    required: true
  },
  value_boolean: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: filename,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

module.exports = mongoose.model(filename, schema)
