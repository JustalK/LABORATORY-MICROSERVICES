/**
* The module for managing everything relative to the database
* @module database
*/
'use strict'

const mongoose = require('mongoose')
const mongo_uri_builder = require('mongo-uri-builder')

module.exports = {
  /**
  * Parse the db_uri variable for extracting the db host, port, username and password
  * @param {string} db_name The name of the db
  * @param {string} db_uri The db uri
  * @param {string} db_username The username of the db
  * @param {string} db_password The password of the db
  * @return {Object} The data of the db
  **/
  parse_db_uri: (db, db_host, db_port, db_name, db_username, db_password, db_auth = '') => {
    const db_data = {}
    db_data.db = db
    db_data.host = db_host
    db_data.port = db_port
    db_data.username = db_username
    db_data.password = db_password
    db_data.authsource = db_auth

    return db_data
  },
  /**
  * Create the mongo uri from the data of the db
  * @param {Object} db_data The data of the db
  * @return {Object} The mongo uri object
  **/
  create_mongo_uri: db_data => {
    console.log(db_data)
    const config = {
      username: db_data.username,
      password: db_data.password,
      host: db_data.host,
      port: db_data.port,
      database: db_data.db
    }

    if (db_data.authsource) {
      config.options = {
        authSource: db_data.authsource
      }
    }

    return mongo_uri_builder(config)
  },
  /**
  * Connect the app to the database
  * @param {string} db_name The name of the db
  * @param {string} db_uri The db uri
  * @param {string} db_username The username of the db
  * @param {string} db_password The password of the db
  **/
  mongoose_connect: (db, db_host, db_port, db_name, db_username, db_password, db_auth = '') => {
    const db_data = module.exports.parse_db_uri(db, db_host, db_port, db_name, db_username, db_password, db_auth)
    const db_uri_data = module.exports.create_mongo_uri(db_data)

    console.log(db_uri_data)
    mongoose.connect(db_uri_data, { useNewUrlParser: true, useUnifiedTopology: true })

    mongoose.connection.on('connected', err => {
      console.log('DB CONNECTING');
    });

    mongoose.connection.on('connected', err => {
      console.log('DB CONNECTED');
    });

    mongoose.connection.on('error', err => {
      console.log(err);
    });
  }
}
