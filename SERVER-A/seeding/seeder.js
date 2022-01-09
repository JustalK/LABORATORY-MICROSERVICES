'use strict'

require('module-alias/register')
const utils = require('@src/libs/utils')
const mode = utils.mode(process.env.NODE_ENV)
require('dotenv').config({ path: './env/.env.' + mode })
const path = require('path')
const { Seeder } = require('mongo-seeding')

module.exports = {
  /**
  * Return the created seeder with the config given
  * @params {Object} config The config for the seeder
  * @return {Seeder} The seeder object
  **/
  get_seeder: (config) => {
    return new Seeder(config)
  },
  /**
  * Seed the database with the informations in data
  **/
  seed: async (folder = 'tests', uri = null) => {
    const seeder = module.exports.get_seeder({
      database: uri || 'mongodb://' + process.env.DB_USER_DATA + ':' + process.env.DB_PASS_DATA + '@' + process.env.DB_URI_URL + ':' + process.env.DB_URI_PORT + '/' + process.env.DB_NAME + process.env.DB_URI_AUTHENTICATION_DB,
      dropCollections: true
    })

    const collectionReadingOptions = {
      transformers: [
        Seeder.Transformers.replaceDocumentIdWithUnderscoreId
      ]
    }

    const collections = seeder.readCollectionsFromPath(
      path.resolve('./seeding/' + folder),
      collectionReadingOptions
    )
    return seeder.import(collections)
  }
}
