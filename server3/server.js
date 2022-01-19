/**
* The module for managing everything relative to the server
* @module server
*/
'use strict'

const express = require('express')

module.exports = {
  /**
  * Create the restify server
  * @return {Express} A server restify without any routes
  **/
  create_server: () => {
    return express()
  },
  /**
  * Start the server using the parameter
  * @param {string} name The name of the server
  * @param {string} host The host of the server
  * @param {string} port The port of the server
  * @return {Promise<boolean>} True if the server start or else an error
  **/
  start: async (name, host, port) => {
    const server = module.exports.create_server()

    server.use('/', require('./routes/app'))

    return new Promise((resolve, reject) => {
      server.listen({ port: port, host: host }, (error) => module.exports.callback(error, resolve, reject))
    })
  },
  /**
  * Handle the callback of the server listening
  * @param {Error} error The object error returned by the listen function
  **/
  callback: (error, resolve, reject) => {
    if (error) {
      console.log('Server fail to start !')
      console.log('Server fail to start !')
      reject(new Error('Server fail to start !'))
    }
    console.log('Server Started 2')
    console.log('Logger Activated')
    resolve(true)
  }
}
