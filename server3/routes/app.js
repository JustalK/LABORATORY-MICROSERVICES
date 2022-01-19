/**
* The endpoint of the express app
* @module routes/app
*/
'use strict'

const express = require('express')
const router = express.Router()

// Add an endpoint for testing the API
router.get('/status', async (request, response) => {
  response.send({
    status: 'working'
  })
})

module.exports = router
