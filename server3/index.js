/**
* The module for managing the entry point of the API
* @module home
*/

'use strict'

require('dotenv').config({ path: './env/.env' })
const server = require('./server')

module.exports = {
  /**
  * Start the API
  * @return {Promise<boolean>} Return true if the server has been started or else an error
  **/
  start: async () => {
    return await server.start(process.env.API_NAME, process.env.HOST, process.env.PORT)
  }
}

module.exports.start()
