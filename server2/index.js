/**
* The module for managing the entry point of the API
* @module home
*/

'use strict'

require('dotenv').config({ path: './env/.env' })
const server = require('./server')
const database = require('./database')

module.exports = {
  /**
  * Start the API
  * @return {Promise<boolean>} Return true if the server has been started or else an error
  **/
  start: async () => {
    database.mongoose_connect(process.env.DB, process.env.DB_HOST, process.env.DB_PORT, process.env.DB_NAME, process.env.DB_USER_DATA, process.env.DB_PASS_DATA, process.env.DB_AUTH)
    return await server.start(process.env.API_NAME, process.env.HOST, process.env.PORT)
  }
}

module.exports.start()
