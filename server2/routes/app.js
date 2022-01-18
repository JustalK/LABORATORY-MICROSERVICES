/**
* The endpoint of the express app
* @module routes/app
*/
'use strict'

const express = require('express')
const router = express.Router()
const dbs = require('../dbs/user')
const faker = require('@faker-js/faker');

// Add an endpoint for testing the API
router.get('/status', async (request, response) => {
  response.send({
    status: 'working'
  })
})

// Add an endpoint for testing the API
router.get('/create', async (request, response) => {
  const rsl = await dbs.insert({
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName()
  })
  response.status(200).send(rsl)
})

// Return all the users
router.get('/', async (request, response) => {
  const rsl = await dbs.getAll()
  response.status(200).send(rsl)
})

module.exports = router
