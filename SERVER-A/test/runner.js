'use strict'

require('dotenv').config({ path: './env/.env.test' })
require('isomorphic-fetch')
require('module-alias/register')
const { performance } = require('perf_hooks')

const mongo = require('@test/libs/mongo')

const test = require('ava')
const m = require('@src')
const m_seeding = require('@seeding/seeder')

const test_0 = require('@test/cases/test_0')
const test_1 = require('@test/cases/test_1')

let start = null
let end = null

test.before(async () => {
  start = performance.now()
  await m.start()
})

test.beforeEach(async () => {
  const uri = await mongo.connect()
  await m_seeding.seed('tests', uri)
})

test.afterEach(async () => {
  await mongo.disconnect()
})

test.before(async () => {
  end = performance.now()
  console.log(`Tests done in ${end - start} ms.`)
})

test_1.cases(test)
test_0.cases(test)
