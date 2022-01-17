/**
* The endpoint of the express app
* @module routes/app
*/
'use strict'

const express = require('express')
const router = express.Router()
const dbs = require('../dbs/test')

// Add an endpoint for testing the API
router.get('/', async (request, response) => {
  response.send({
    status: 'working'
  })
})

// Add an endpoint for testing the API
router.get('/create', async (request, response) => {
  const rsl = await dbs.insert({name: "test"})
  response.status(200).send(rsl)
})

module.exports = router
