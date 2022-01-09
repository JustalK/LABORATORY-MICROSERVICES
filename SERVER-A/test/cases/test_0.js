'use strict'

const queries_test = require('@test/queries/test')
const mutations_test = require('@test/mutations/test')

const cases = (test) => {
  test('[TEST] A test getting the actual element in the seed in another file (1 total)', async t => {
    const response = await queries_test.get_tests()
    t.is(response.get_tests.length, 1)
  })

  test('[TEST] Another test getting the actual element in the seed in another file (1 total)', async t => {
    const response = await queries_test.get_tests()
    t.is(response.get_tests.length, 1)
  })

  test('[TEST] Again another test getting the actual element in the seed in another file (1 total)', async t => {
    const response = await queries_test.get_tests()
    t.is(response.get_tests.length, 1)
  })

  test('[TEST] A test adding one element in another file (2 total)', async t => {
    await mutations_test.add_test('String in a file', 568, true)
    const response_after = await queries_test.get_tests()
    t.is(response_after.get_tests.length, 2)
  })
}

module.exports = {
  cases
}
