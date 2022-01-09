'use strict'

const queries_test = require('@test/queries/test')
const mutations_test = require('@test/mutations/test')

const cases = (test) => {
  test('[TEST] A test adding one element (2 total)', async t => {
    await mutations_test.add_test('String', 12, false)
    const response_after = await queries_test.get_tests()
    t.is(response_after.get_tests.length, 2)
  })

  test('[TEST] A test getting the actual element in the seed (1 total)', async t => {
    const response = await queries_test.get_tests()
    t.is(response.get_tests.length, 1)
  })

  test('[TEST] A test adding two element (3 total)', async t => {
    await mutations_test.add_test('String', 12, false)
    await mutations_test.add_test('Another String', 15, true)
    const response = await queries_test.get_tests()
    t.is(response.get_tests.length, 3)
  })

  test('[TEST] Another test getting the actual element in the seed (1 total)', async t => {
    const response = await queries_test.get_tests()
    t.is(response.get_tests.length, 1)
  })
}

module.exports = {
  cases
}
